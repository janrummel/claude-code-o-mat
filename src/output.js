import chalk from 'chalk';

const BOX_WIDTH = 62;

function pad(text, width) {
  const visible = stripAnsi(text);
  const padding = Math.max(0, width - visible.length);
  return text + ' '.repeat(padding);
}

function center(text, width) {
  const visible = stripAnsi(text);
  const totalPad = Math.max(0, width - visible.length);
  const left = Math.floor(totalPad / 2);
  const right = totalPad - left;
  return ' '.repeat(left) + text + ' '.repeat(right);
}

// Simple ANSI strip for length calculation
function stripAnsi(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, '');
}

function boxLine(content) {
  return chalk.dim('\u2551') + ' ' + pad(content, BOX_WIDTH - 4) + ' ' + chalk.dim('\u2551');
}

function boxTop() {
  return chalk.dim('\u2554' + '\u2550'.repeat(BOX_WIDTH - 2) + '\u2557');
}

function boxBottom() {
  return chalk.dim('\u255A' + '\u2550'.repeat(BOX_WIDTH - 2) + '\u255D');
}

function boxDivider() {
  return chalk.dim('\u2560' + '\u2550'.repeat(BOX_WIDTH - 2) + '\u2563');
}

function emptyLine() {
  return boxLine('');
}

function wrapText(text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if (current.length + word.length + 1 > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + ' ' + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/**
 * Display the quiz result in a beautiful terminal card.
 */
export function displayResult(result) {
  const { type, earnedBadges, whyBullets, runnerUpType } = result;
  const innerWidth = BOX_WIDTH - 4;

  const lines = [];
  lines.push('');
  lines.push(boxTop());
  lines.push(boxLine(center(chalk.bold.cyan('\u{1F916}  CLAUDE CODE-O-MAT  \u{1F916}'), innerWidth)));
  lines.push(boxLine(center(chalk.dim('Your Result'), innerWidth)));
  lines.push(boxDivider());
  lines.push(emptyLine());

  // Type name
  lines.push(boxLine(center(chalk.bold.yellow(`${type.emoji}  ${type.name.toUpperCase()}`), innerWidth)));
  lines.push(emptyLine());

  // One-liner (don't double-wrap in quotes if it already has them)
  const displayOneLiner = type.oneLiner.startsWith('"') ? type.oneLiner : `"${type.oneLiner}"`;
  const oneLineWrapped = wrapText(displayOneLiner, innerWidth);
  for (const line of oneLineWrapped) {
    lines.push(boxLine(center(chalk.italic(line), innerWidth)));
  }
  lines.push(emptyLine());

  // Superpower
  const spLines = wrapText(type.superpower, innerWidth - 4);
  lines.push(boxLine(chalk.green('\u{1F4AA} Superpower:')));
  for (const line of spLines) {
    lines.push(boxLine('   ' + line));
  }
  lines.push(emptyLine());

  // Boss fight
  const bfLines = wrapText(type.bossFight, innerWidth - 4);
  lines.push(boxLine(chalk.red('\u{1F409} Boss fight:')));
  for (const line of bfLines) {
    lines.push(boxLine('   ' + line));
  }
  lines.push(emptyLine());

  // Fix
  const fixLines = wrapText(type.fix, innerWidth - 4);
  lines.push(boxLine(chalk.blue('\u{1F6E0}\uFE0F  Fix:')));
  for (const line of fixLines) {
    lines.push(boxLine('   ' + line));
  }

  // Badges
  if (earnedBadges.length > 0) {
    lines.push(emptyLine());
    const badgeStr = earnedBadges.map((b) => `${b.emoji} ${b.name}`).join('  \u00B7  ');
    lines.push(boxLine(chalk.magenta('\u{1F3F7}\uFE0F  Badges: ') + badgeStr));
  }

  // Runner-up
  if (runnerUpType) {
    lines.push(emptyLine());
    lines.push(boxLine(chalk.dim(`Runner-up: ${runnerUpType.emoji} ${runnerUpType.name}`)));
  }

  lines.push(emptyLine());
  lines.push(boxBottom());

  console.log(lines.join('\n'));

  // Why bullets
  if (whyBullets.length > 0) {
    console.log('');
    console.log(chalk.bold('  Why this type?'));
    for (const bullet of whyBullets) {
      const wrapped = wrapText(bullet, 56);
      console.log(chalk.dim('  \u2022 ') + wrapped[0]);
      for (let i = 1; i < wrapped.length; i++) {
        console.log('    ' + wrapped[i]);
      }
    }
  }

  // Gentle reflection note
  console.log('');
  console.log(
    chalk.dim(
      '  \u{1F331} This is a playful self-reflection, not a diagnosis. Patterns can\n' +
      '  shift \u2014 and noticing them is the first step to choosing them.'
    )
  );
}

/**
 * Generate a copy-pasteable LinkedIn snippet.
 */
export function generateLinkedInSnippet(result) {
  const { type, earnedBadges } = result;

  let snippet = `\u{1F916} I just took the Claude Code-o-mat quiz!\n\n`;
  const displayOneLiner = type.oneLiner.startsWith('"') ? type.oneLiner : `"${type.oneLiner}"`;
  snippet += `I'm ${addArticle(type.name)} \u2014 ${displayOneLiner}\n\n`;
  snippet += `\u{1F4AA} Superpower: ${type.superpower}\n`;
  snippet += `\u{1F409} Boss fight: ${type.bossFight}\n`;
  snippet += `\u{1F6E0}\uFE0F Fix: ${type.fix}\n`;

  if (earnedBadges.length > 0) {
    const badgeStr = earnedBadges.map((b) => `${b.emoji} ${b.name}`).join(' \u00B7 ');
    snippet += `\u{1F3F7}\uFE0F ${badgeStr}\n`;
  }

  snippet += `\nWhat's YOUR Claude Code type? Try it:\n`;
  snippet += `\u2192 github.com/janrummel/claude-code-o-mat\n\n`;
  snippet += `#ClaudeCode #CodingWithAI #DevTools`;

  return snippet;
}

function addArticle(name) {
  if (name.startsWith('The ')) return name;
  const firstChar = name[0];
  const article = 'AEIOUaeiou'.includes(firstChar) ? 'an' : 'a';
  return `${article} ${name}`;
}

/**
 * Print the LinkedIn snippet with framing.
 */
export function displayLinkedInSnippet(result) {
  const snippet = generateLinkedInSnippet(result);

  console.log('');
  console.log(chalk.bold.cyan('  \u{1F4CB} Your LinkedIn snippet (copy & paste):'));
  console.log(chalk.dim('  ' + '\u2500'.repeat(56)));
  for (const line of snippet.split('\n')) {
    console.log('  ' + line);
  }
  console.log(chalk.dim('  ' + '\u2500'.repeat(56)));
  console.log('');
}
