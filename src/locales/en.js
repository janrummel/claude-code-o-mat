// English locale — complete dataset (10 questions, rebalanced scoring)

export const locale = {
  code: 'en',

  ui: {
    langName: 'English',
    quizSubtitle: 'What Claude Code coding type are you?',
    questionCount: '10 questions \u00B7 ~90 sec \u00B7 zero data sent',
    disclaimer: 'Not a psychological test. Just a playful self-reflection game.',
    startQuiz: 'Start Quiz',
    analyzing: 'Analyzing your coding patterns...',
    questionOf: 'of',
    question: 'Question',
    yourResult: 'Your Result',
    youAre: 'You are',
    superpower: 'Superpower',
    bossFight: 'Boss fight',
    fix: 'Fix',
    badges: 'Badges',
    runnerUp: 'Runner-up',
    whyThisType: 'Why this type?',
    reflection:
      '\u{1F331} This is a playful self-reflection, not a diagnosis. Patterns can shift \u2014 and noticing them is the first step to choosing them.',
    shareOnLinkedIn: 'Share on LinkedIn',
    copyToClipboard: 'Copy to clipboard',
    copied: '\u2713 Copied!',
    retakeQuiz: '\u21BB Retake Quiz',
    back: '\u2190 Back',
    linkedinSnippetTitle: '\u{1F4CB} Your LinkedIn snippet (copy & paste):',
    linkedinIntro: '\u{1F916} I just took the Claude Code-o-mat quiz!',
    linkedinIm: "I'm",
    linkedinCta: "What's YOUR Claude Code type? Try it:",
    thanks: 'Thanks for playing! \u{1F389}',
    ctrlC: "\u{1F44B} No worries! You're probably a Window Starter anyway.",
    noData: 'No data collected. Ever.',
  },

  types: {
    windowStarter: {
      name: 'The Window Starter',
      emoji: '\u{1FA9F}',
      oneLiner: '"Just a quick question..." \u2192 4 hours later',
      superpower:
        'Rapid exploration and iteration. You discover solutions others miss because you keep poking at the problem from different angles.',
      bossFight: 'Session fragmentation \u2014 50 tiny chats, zero coherent progress.',
      fix: '\u{1F6A7} Session Gate \u2014 before opening Claude, write your goal in ONE sentence. If you can\u2019t, you\u2019re not ready.',
    },
    batchBuilder: {
      name: 'The Batch Builder',
      emoji: '\u{1F4E6}',
      oneLiner: 'Collects tasks like Pok\u00e9mon, then deploys in one focused sprint',
      superpower:
        'Deep, focused sessions that produce real outcomes. Your batches are legendary \u2014 one sit-down, five features shipped.',
      bossFight: 'Over-batching \u2014 your queue grows faster than you clear it.',
      fix: '\u{1F3AF} 2-Task Rule \u2014 if your batch has more than 5 items, split it into two sessions. Shipped > planned.',
    },
    promptPerfectionist: {
      name: 'The Prompt Perfectionist',
      emoji: '\u{1F48E}',
      oneLiner: 'Believes the perfect prompt exists. Will find it.',
      superpower:
        'Consistently high-quality outputs because your instructions leave zero room for misinterpretation. Your CLAUDE.md is a work of art.',
      bossFight: 'Prompt paralysis \u2014 20 minutes crafting, 2 minutes coding.',
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
      bossFight: 'The one diff you didn\u2019t read that mass-deleted your auth middleware.',
      fix: '\u{1F3B2} Diff Roulette \u2014 actually read at least every 3rd diff fully. Your future self will thank you.',
    },
    sprintCaptain: {
      name: 'The Sprint Captain',
      emoji: '\u26A1',
      oneLiner: 'Ships features like every day is a hackathon',
      superpower:
        'Raw momentum. When you\u2019re in the zone, features materialize faster than PMs can write tickets.',
      bossFight: 'Tech debt piling up behind the sprint like dishes after a party.',
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
  },

  typeOrder: [
    'windowStarter',
    'batchBuilder',
    'promptPerfectionist',
    'secondOpinion',
    'autoAccept',
    'sprintCaptain',
    'guardrailEngineer',
    'systemArchitect',
  ],

  badges: {
    contextHoarder: { name: 'Context Hoarder', emoji: '\u{1F9E0}' },
    toolHopper: { name: 'Tool Hopper', emoji: '\u{1F998}' },
    wallCrasher: { name: 'Wall Crasher', emoji: '\u{1F9F1}' },
    parallelJuggler: { name: 'Parallel Juggler', emoji: '\u{1F9F6}' },
  },

  badgeTriggers: {
    context: { 0: 'contextHoarder' },
    rateLimit: { 1: 'toolHopper', 2: 'wallCrasher' },
    whileWaiting: { 0: 'parallelJuggler' },
  },

  questions: [
    {
      id: 'sessionStart',
      text: 'How does a typical Claude Code session begin for you?',
      options: [
        { text: '"Hey Claude, quick question..." (you say this 12 times a day)', scores: { windowStarter: 3 } },
        { text: 'I mentally queue up 5+ tasks, then sit down for a proper session', scores: { batchBuilder: 3 } },
        { text: 'I craft a detailed prompt with constraints, examples, and context', scores: { promptPerfectionist: 3 } },
        { text: 'I open the terminal and start typing \u2014 inspiration strikes mid-keystroke', scores: { sprintCaptain: 2, autoAccept: 1 } },
      ],
    },
    {
      id: 'eightyPercent',
      text: 'Your feature is ~80% done. What\u2019s your move?',
      options: [
        { text: 'Ship it. Iterate later. Done is better than perfect.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Write tests for the remaining edge cases before merging', scores: { guardrailEngineer: 3 } },
        { text: 'Ask Claude to review its own work and explain potential issues', scores: { secondOpinion: 3 } },
        { text: 'Pause and reconsider the interface design before going further', scores: { systemArchitect: 3 } },
      ],
    },
    {
      id: 'codeChanges',
      text: 'Claude suggests a batch of code changes. You...',
      options: [
        { text: 'Accept all. Life\u2019s too short to read every diff.', scores: { autoAccept: 3 } },
        { text: 'Read every single line. Sometimes rewrite parts by hand.', scores: { promptPerfectionist: 3 } },
        { text: 'Run the tests \u2014 if they\u2019re green, it ships.', scores: { guardrailEngineer: 3 } },
        { text: 'Ask "Are you sure about this approach?" at least once.', scores: { secondOpinion: 3 } },
      ],
    },
    {
      id: 'claudeMd',
      text: 'Your CLAUDE.md file is...',
      options: [
        { text: 'My what now?', scores: { windowStarter: 3 } },
        { text: 'A masterpiece. Constraints, conventions, examples \u2014 all curated.', scores: { promptPerfectionist: 3 } },
        { text: 'Practical \u2014 project structure, key rules, test commands.', scores: { batchBuilder: 2, guardrailEngineer: 1 } },
        { text: 'A living document \u2014 I update it mid-session when I learn something.', scores: { systemArchitect: 2, sprintCaptain: 1 } },
      ],
    },
    {
      id: 'context',
      text: 'When it comes to giving Claude context, you...',
      options: [
        { text: 'Paste the whole README + file tree. Context is king.', scores: { windowStarter: 3 } },
        { text: 'Keep it minimal. Claude should figure it out.', scores: { autoAccept: 3 } },
        { text: 'Carefully curate context per task \u2014 relevant files only.', scores: { systemArchitect: 2, promptPerfectionist: 1 } },
        { text: 'Let the conversation grow naturally. Context accumulates.', scores: { windowStarter: 2, batchBuilder: 1 } },
      ],
    },
    {
      id: 'uncertainty',
      text: 'Claude gives an answer you\u2019re not 100% sure about. You...',
      options: [
        { text: '"Can you explain your reasoning step by step?"', scores: { secondOpinion: 3 } },
        { text: 'Google it to cross-reference.', scores: { secondOpinion: 2, guardrailEngineer: 1 } },
        { text: 'Trust the vibes and move on.', scores: { autoAccept: 3 } },
        { text: 'Write a test to verify the behavior empirically.', scores: { guardrailEngineer: 3 } },
      ],
    },
    {
      id: 'rateLimit',
      text: 'You hit a rate limit. Your immediate reaction?',
      options: [
        { text: 'Finally take that break you\u2019ve been postponing.', scores: { batchBuilder: 3 } },
        { text: 'Switch to ChatGPT / Gemini / Copilot instantly.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Frustrated \u2014 I was IN THE ZONE!', scores: { sprintCaptain: 3 } },
        { text: 'Review what Claude produced so far while waiting.', scores: { systemArchitect: 2, guardrailEngineer: 1 } },
      ],
    },
    {
      id: 'definitionOfDone',
      text: 'A task is "done" when...',
      options: [
        { text: 'It works. Ship it.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Tests pass AND the code is clean AND the PR description is written.', scores: { guardrailEngineer: 3 } },
        { text: 'I\u2019ve verified it independently at least twice.', scores: { secondOpinion: 3 } },
        { text: 'It fits the architectural vision and handles edge cases gracefully.', scores: { systemArchitect: 3 } },
      ],
    },
    {
      id: 'newProject',
      text: 'Starting a brand new project, you first...',
      options: [
        { text: 'Jump right in. Structure will emerge organically.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Set up the test framework, CI pipeline, and linter.', scores: { guardrailEngineer: 3 } },
        { text: 'Design the architecture \u2014 interfaces, modules, data flow.', scores: { systemArchitect: 3 } },
        { text: 'Write a detailed project brief / CLAUDE.md for Claude.', scores: { promptPerfectionist: 2, batchBuilder: 1 } },
      ],
    },
    {
      id: 'whileWaiting',
      text: 'While Claude is processing a complex task, you...',
      options: [
        { text: 'Start another Claude session in a different terminal.', scores: { sprintCaptain: 3 } },
        { text: 'Watch the output scroll by and mentally review it.', scores: { secondOpinion: 3 } },
        { text: 'Work on something completely unrelated.', scores: { batchBuilder: 3 } },
        { text: 'Scroll through social media. Honestly.', scores: { windowStarter: 3 } },
      ],
    },
  ],
};
