// Badge definitions and trigger logic.
// Badges are triggered by specific answer choices (question ID + option index).

export const badges = {
  contextHoarder: {
    name: 'Context Hoarder',
    emoji: '\u{1F9E0}',
    description: 'Pastes the whole repo into context "just in case"',
  },
  nightOwl: {
    name: 'Night Owl',
    emoji: '\u{1F989}',
    description: 'Codes best when the rest of the world is asleep',
  },
  toolHopper: {
    name: 'Tool Hopper',
    emoji: '\u{1F998}',
    description: 'Switches AI tools faster than tabs in a browser',
  },
  wallCrasher: {
    name: 'Wall Crasher',
    emoji: '\u{1F9F1}',
    description: 'Sprints to the limit, then hits the wall at full speed',
  },
  parallelJuggler: {
    name: 'Parallel Juggler',
    emoji: '\u{1F9F6}',
    description: 'Runs more concurrent sessions than CPU cores',
  },
};

// Maps: questionId -> optionIndex -> badgeId
export const badgeTriggers = {
  context: { 0: 'contextHoarder' },
  lateNight: { 0: 'nightOwl', 2: 'nightOwl' },
  rateLimit: { 1: 'toolHopper', 2: 'wallCrasher' },
  whileWaiting: { 0: 'parallelJuggler' },
};

/**
 * Given a map of { questionId: selectedOptionIndex }, return earned badge IDs.
 */
export function collectBadges(answers) {
  const earned = new Set();
  for (const [questionId, optionIndex] of Object.entries(answers)) {
    const triggers = badgeTriggers[questionId];
    if (triggers && triggers[optionIndex] !== undefined) {
      earned.add(triggers[optionIndex]);
    }
  }
  return [...earned];
}
