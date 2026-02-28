// All 8 main types with their descriptions, superpowers, boss fights, and fixes.
// Order matters: first type wins on tiebreak.

export const types = {
  windowStarter: {
    name: 'The Window Starter',
    emoji: '\u{1FA9F}',
    oneLiner: '"Just a quick question..." \u2192 4 hours later',
    superpower:
      'Rapid exploration and iteration. You discover solutions others miss because you keep poking at the problem from different angles.',
    bossFight:
      'Session fragmentation \u2014 50 tiny chats, zero coherent progress.',
    fix: '\u{1F6A7} Session Gate \u2014 before opening Claude, write your goal in ONE sentence. If you can\u2019t, you\u2019re not ready.',
  },
  batchBuilder: {
    name: 'The Batch Builder',
    emoji: '\u{1F4E6}',
    oneLiner: 'Collects tasks like Pok\u00e9mon, then deploys in one focused sprint',
    superpower:
      'Deep, focused sessions that produce real outcomes. Your batches are legendary \u2014 one sit-down, five features shipped.',
    bossFight:
      'Over-batching \u2014 your queue grows faster than you clear it.',
    fix: '\u{1F3AF} 2-Task Rule \u2014 if your batch has more than 5 items, split it into two sessions. Shipped > planned.',
  },
  promptPerfectionist: {
    name: 'The Prompt Perfectionist',
    emoji: '\u{1F48E}',
    oneLiner: 'Believes the perfect prompt exists. Will find it.',
    superpower:
      'Consistently high-quality outputs because your instructions leave zero room for misinterpretation. Your CLAUDE.md is a work of art.',
    bossFight:
      'Prompt paralysis \u2014 20 minutes crafting, 2 minutes coding.',
    fix: '\u23F1\uFE0F Good Enough Gate \u2014 set a 3-minute timer per prompt. When it rings, hit send.',
  },
  secondOpinion: {
    name: 'The Second-Opinion Seeker',
    emoji: '\u{1F50D}',
    oneLiner: '"Looks right... but can you double-check?"',
    superpower:
      'You catch bugs and hallucinations others miss. Your verification loops are annoying\u2014and they save production.',
    bossFight:
      'Validation spirals that kill momentum \u2014 three rounds of "are you sure?" before a one-line change.',
    fix: '\u2705 Trust Threshold \u2014 if two independent checks agree, ship it. No third opinion needed.',
  },
  autoAccept: {
    name: 'The Auto-Accept Gambler',
    emoji: '\u{1F3B0}',
    oneLiner: 'Reads diffs like Terms of Service \u2014 scroll, scroll, accept',
    superpower:
      'Insane throughput when the AI is on point. You ship more before lunch than most do all day.',
    bossFight:
      'The one diff you didn\u2019t read that mass-deleted your auth middleware.',
    fix: '\u{1F3B2} Diff Roulette \u2014 actually read at least every 3rd diff fully. Your future self will thank you.',
  },
  sprintCaptain: {
    name: 'The Sprint Captain',
    emoji: '\u26A1',
    oneLiner: 'Ships features like every day is a hackathon',
    superpower:
      'Raw momentum. When you\u2019re in the zone, features materialize faster than PMs can write tickets.',
    bossFight:
      'Tech debt piling up behind the sprint like dishes after a party.',
    fix: '\u{1F9CA} Cooldown Round \u2014 after every 3 features, spend one session on cleanup. Future-you is a stakeholder too.',
  },
  guardrailEngineer: {
    name: 'The Guardrail Engineer',
    emoji: '\u{1F6E1}\uFE0F',
    oneLiner: 'Moves fast, but always with a safety net underneath',
    superpower:
      'Speed AND reliability \u2014 the unicorn combo. Your tests catch what your eyes miss, and your CI never lies.',
    bossFight:
      'Over-engineering safety for trivial changes \u2014 writing 50 lines of tests for a color tweak.',
    fix: '\u{1F4E1} Risk Radar \u2014 match review depth to change risk. A typo fix \u2260 an auth refactor.',
  },
  systemArchitect: {
    name: 'The System Architect',
    emoji: '\u{1F3D7}\uFE0F',
    oneLiner: 'Thinks in interfaces and modules before writing a single line',
    superpower:
      'Code that ages like fine wine \u2014 extensible, clean, and robust. Six months later, it still makes sense.',
    bossFight:
      'Analysis paralysis \u2014 the perfect architecture exists only in your head while the deadline passes.',
    fix: '\u{1F528} Prototype First \u2014 build a rough working version before optimizing. Ugly code that runs beats beautiful code that doesn\u2019t.',
  },
};

export const typeOrder = [
  'windowStarter',
  'batchBuilder',
  'promptPerfectionist',
  'secondOpinion',
  'autoAccept',
  'sprintCaptain',
  'guardrailEngineer',
  'systemArchitect',
];
