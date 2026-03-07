/**
 * Calculate the quiz result from collected answers.
 * @param {Array<{questionId: string, optionIndex: number}>} answers
 * @param {object} locale - The active locale ({ questions, types, typeOrder, badges, badgeTriggers })
 * @returns {{ typeId: string, type: object, earnedBadges: object[], whyBullets: string[] }}
 */
export function calculateResult(answers, locale) {
  const { questions, types, typeOrder, badges, badgeTriggers } = locale;

  // 1. Tally scores per type
  const scores = {};
  for (const id of typeOrder) {
    scores[id] = 0;
  }

  const contributions = [];

  for (const { questionId, optionIndex } of answers) {
    const question = questions.find((q) => q.id === questionId);
    if (!question) continue;
    const option = question.options[optionIndex];
    if (!option) continue;

    for (const [typeId, points] of Object.entries(option.scores)) {
      scores[typeId] = (scores[typeId] || 0) + points;
      contributions.push({
        questionId,
        questionText: question.text,
        answerText: option.text,
        typeId,
        points,
      });
    }
  }

  // 2. Determine winning type (highest score, tiebreak by typeOrder)
  let winningTypeId = typeOrder[0];
  let highScore = scores[typeOrder[0]];

  for (const id of typeOrder) {
    if (scores[id] > highScore) {
      highScore = scores[id];
      winningTypeId = id;
    }
  }

  // 3. Collect badges
  const earnedBadges = [];
  const seen = new Set();
  for (const { questionId, optionIndex } of answers) {
    const triggers = badgeTriggers[questionId];
    if (triggers && triggers[optionIndex] !== undefined) {
      const badgeId = triggers[optionIndex];
      if (!seen.has(badgeId) && badges[badgeId]) {
        seen.add(badgeId);
        earnedBadges.push(badges[badgeId]);
      }
    }
  }

  // 4. Generate "why" bullets — top 3 contributions to winning type
  const winnerContributions = contributions
    .filter((c) => c.typeId === winningTypeId)
    .sort((a, b) => b.points - a.points)
    .slice(0, 3);

  const whyBullets = winnerContributions.map(
    (c) => `${trimText(c.answerText, 55)} (${trimText(c.questionText.replace(/\?$/, ''), 40)})`
  );

  // 5. Runner-up type
  let runnerUpId = null;
  let runnerUpScore = -1;
  for (const id of typeOrder) {
    if (id !== winningTypeId && scores[id] > runnerUpScore) {
      runnerUpScore = scores[id];
      runnerUpId = id;
    }
  }

  return {
    typeId: winningTypeId,
    type: types[winningTypeId],
    scores,
    earnedBadges: earnedBadges.slice(0, 3),
    whyBullets,
    runnerUpId,
    runnerUpType: runnerUpId ? types[runnerUpId] : null,
  };
}

function trimText(text, maxLen) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + '\u2026';
}
