#!/usr/bin/env node

import select from '@inquirer/select';
import chalk from 'chalk';
import { questions } from './questions.js';
import { calculateResult } from './scoring.js';
import { displayResult, displayLinkedInSnippet } from './output.js';

// ─── Welcome ────────────────────────────────────────────────
function showWelcome() {
  console.log('');
  console.log(chalk.cyan('  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510'));
  console.log(chalk.cyan('  \u2502') + chalk.bold.white('   \u{1F916}  CLAUDE CODE-O-MAT               ') + chalk.cyan('\u2502'));
  console.log(chalk.cyan('  \u2502') + chalk.dim('   What Claude Code coding type are you?') + chalk.cyan(' \u2502'));
  console.log(chalk.cyan('  \u2502') + chalk.dim('   13 questions \u00B7 ~2 min \u00B7 zero data sent  ') + chalk.cyan('\u2502'));
  console.log(chalk.cyan('  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518'));
  console.log('');
}

// ─── Spinner animation ──────────────────────────────────────
function showSpinner(text, durationMs) {
  const frames = ['\u280B', '\u2819', '\u2839', '\u2838', '\u283C', '\u2834', '\u2826', '\u2827', '\u2807', '\u280F'];
  let i = 0;

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      process.stdout.write(`\r  ${chalk.cyan(frames[i % frames.length])} ${text}`);
      i++;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      process.stdout.write(`\r  ${chalk.green('\u2714')} ${text}\n`);
      resolve();
    }, durationMs);
  });
}

// ─── Main quiz loop ─────────────────────────────────────────
async function runQuiz() {
  showWelcome();

  const answers = [];
  const total = questions.length;

  for (let i = 0; i < total; i++) {
    const q = questions[i];
    const progress = chalk.dim(`[${i + 1}/${total}]`);

    try {
      const optionIndex = await select({
        message: `${progress} ${q.text}`,
        choices: q.options.map((opt, idx) => ({
          name: opt.text,
          value: idx,
        })),
      });

      answers.push({ questionId: q.id, optionIndex });
    } catch {
      // User pressed Ctrl+C
      console.log('');
      console.log(
        chalk.yellow('  \u{1F44B} No worries! You\'re probably a Window Starter anyway.')
      );
      console.log('');
      process.exit(0);
    }
  }

  // Dramatic pause
  console.log('');
  await showSpinner('Analyzing your coding patterns...', 1500);

  // Calculate and display result
  const result = calculateResult(answers);

  displayResult(result);
  displayLinkedInSnippet(result);

  console.log(chalk.dim('  Thanks for playing! \u{1F389}\n'));
}

// ─── Entry ──────────────────────────────────────────────────
runQuiz();
