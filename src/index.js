#!/usr/bin/env node

import select from '@inquirer/select';
import chalk from 'chalk';
import { locale as en } from './locales/en.js';
import { locale as de } from './locales/de.js';
import { calculateResult } from './scoring.js';
import { displayResult, displayLinkedInSnippet } from './output.js';

// ─── Language selection ──────────────────────────────────────
async function pickLanguage() {
  try {
    return await select({
      message: 'Language / Sprache',
      choices: [
        { name: 'English', value: 'en' },
        { name: 'Deutsch', value: 'de' },
      ],
    });
  } catch {
    process.exit(0);
  }
}

// ─── Welcome ────────────────────────────────────────────────
function showWelcome(ui) {
  console.log('');
  console.log(chalk.cyan('  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510'));
  console.log(chalk.cyan('  \u2502') + chalk.bold.white('   \u{1F916}  CLAUDE CODE-O-MAT               ') + chalk.cyan('\u2502'));
  console.log(chalk.cyan('  \u2502') + chalk.dim(`   ${ui.quizSubtitle}`) + chalk.cyan(' \u2502'));
  console.log(chalk.cyan('  \u2502') + chalk.dim(`   ${ui.questionCount}`) + chalk.cyan('\u2502'));
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
  const langCode = await pickLanguage();
  const locale = langCode === 'de' ? de : en;
  const { ui, questions } = locale;

  showWelcome(ui);

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
      console.log('');
      console.log(chalk.yellow(`  ${ui.ctrlC}`));
      console.log('');
      process.exit(0);
    }
  }

  console.log('');
  await showSpinner(ui.analyzing, 1500);

  const result = calculateResult(answers, locale);

  displayResult(result, ui);
  displayLinkedInSnippet(result, ui);

  console.log(chalk.dim(`  ${ui.thanks}\n`));
}

// ─── Entry ──────────────────────────────────────────────────
runQuiz();
