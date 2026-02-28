// 13 quiz questions. Each option has:
//   text     — display text
//   scores   — { typeId: points } awarded when this option is picked
// Question IDs are used for badge triggers (see badges.js).

export const questions = [
  {
    id: 'sessionStart',
    text: 'How does a typical Claude Code session begin for you?',
    options: [
      {
        text: '"Hey Claude, quick question..." (you say this 12 times a day)',
        scores: { windowStarter: 3 },
      },
      {
        text: 'I mentally queue up 5+ tasks, then sit down for a proper session',
        scores: { batchBuilder: 3 },
      },
      {
        text: 'I craft a detailed prompt with constraints, examples, and context',
        scores: { promptPerfectionist: 3 },
      },
      {
        text: 'I open the terminal and start typing \u2014 inspiration strikes mid-keystroke',
        scores: { sprintCaptain: 2, autoAccept: 1 },
      },
    ],
  },
  {
    id: 'eightyPercent',
    text: 'Your feature is ~80% done. What\u2019s your move?',
    options: [
      {
        text: 'Ship it. Iterate later. Done is better than perfect.',
        scores: { sprintCaptain: 2, autoAccept: 1 },
      },
      {
        text: 'Write tests for the remaining edge cases before merging',
        scores: { guardrailEngineer: 3 },
      },
      {
        text: 'Ask Claude to review its own work and explain potential issues',
        scores: { secondOpinion: 3 },
      },
      {
        text: 'Pause and reconsider the interface design before going further',
        scores: { systemArchitect: 3 },
      },
    ],
  },
  {
    id: 'codeChanges',
    text: 'Claude suggests a batch of code changes. You...',
    options: [
      {
        text: 'Accept all. Life\u2019s too short to read every diff.',
        scores: { autoAccept: 3 },
      },
      {
        text: 'Read every single line. Sometimes rewrite parts by hand.',
        scores: { promptPerfectionist: 2, guardrailEngineer: 1 },
      },
      {
        text: 'Run the tests \u2014 if they\u2019re green, it ships.',
        scores: { guardrailEngineer: 3 },
      },
      {
        text: 'Ask "Are you sure about this approach?" at least once.',
        scores: { secondOpinion: 3 },
      },
    ],
  },
  {
    id: 'claudeMd',
    text: 'Your CLAUDE.md file is...',
    options: [
      {
        text: 'My what now?',
        scores: { windowStarter: 3 },
      },
      {
        text: 'A masterpiece. Constraints, conventions, examples \u2014 all curated.',
        scores: { promptPerfectionist: 3 },
      },
      {
        text: 'Practical \u2014 project structure, key rules, test commands.',
        scores: { guardrailEngineer: 2, batchBuilder: 1 },
      },
      {
        text: 'A living document \u2014 I update it mid-session when I learn something.',
        scores: { systemArchitect: 2, sprintCaptain: 1 },
      },
    ],
  },
  {
    id: 'context',
    text: 'When it comes to giving Claude context, you...',
    options: [
      {
        text: 'Paste the whole README + file tree. Context is king.',
        scores: { windowStarter: 1, secondOpinion: 1 },
      },
      {
        text: 'Keep it minimal. Claude should figure it out.',
        scores: { autoAccept: 2, sprintCaptain: 1 },
      },
      {
        text: 'Carefully curate context per task \u2014 relevant files only.',
        scores: { promptPerfectionist: 2, systemArchitect: 1 },
      },
      {
        text: 'Let the conversation grow naturally. Context accumulates.',
        scores: { windowStarter: 2, batchBuilder: 1 },
      },
    ],
  },
  {
    id: 'lateNight',
    text: 'It\u2019s 11 PM on a Tuesday. You\u2019re...',
    options: [
      {
        text: '"Just one more prompt..." (you\u2019ve said this 6 times already)',
        scores: { windowStarter: 2 },
      },
      {
        text: 'Asleep. Coding has office hours.',
        scores: { batchBuilder: 2, guardrailEngineer: 1 },
      },
      {
        text: 'Running a batch of refactors before bed. Peak productivity.',
        scores: { sprintCaptain: 2, batchBuilder: 1 },
      },
      {
        text: 'Writing tomorrow\u2019s prompts in a notes app.',
        scores: { promptPerfectionist: 2, systemArchitect: 1 },
      },
    ],
  },
  {
    id: 'uncertainty',
    text: 'Claude gives an answer you\u2019re not 100% sure about. You...',
    options: [
      {
        text: '"Can you explain your reasoning step by step?"',
        scores: { secondOpinion: 3 },
      },
      {
        text: 'Google it to cross-reference.',
        scores: { secondOpinion: 2, guardrailEngineer: 1 },
      },
      {
        text: 'Trust the vibes and move on.',
        scores: { autoAccept: 3 },
      },
      {
        text: 'Write a test to verify the behavior empirically.',
        scores: { guardrailEngineer: 3 },
      },
    ],
  },
  {
    id: 'sessionCount',
    text: 'How many Claude Code sessions do you run on a typical day?',
    options: [
      {
        text: 'One big deep session \u2014 quality over quantity.',
        scores: { batchBuilder: 3 },
      },
      {
        text: '3\u20135 focused sessions with clear goals each.',
        scores: { sprintCaptain: 2, guardrailEngineer: 1 },
      },
      {
        text: 'Lost count. It\u2019s basically always open.',
        scores: { windowStarter: 3 },
      },
      {
        text: '1\u20132 highly structured sessions with a written agenda.',
        scores: { systemArchitect: 2, batchBuilder: 1 },
      },
    ],
  },
  {
    id: 'rateLimit',
    text: 'You hit a rate limit. Your immediate reaction?',
    options: [
      {
        text: 'Finally take that break you\u2019ve been postponing.',
        scores: { batchBuilder: 2, guardrailEngineer: 1 },
      },
      {
        text: 'Switch to ChatGPT / Gemini / Copilot instantly.',
        scores: { windowStarter: 1, sprintCaptain: 1 },
      },
      {
        text: 'Frustrated \u2014 I was IN THE ZONE!',
        scores: { sprintCaptain: 2 },
      },
      {
        text: 'Review what Claude produced so far while waiting.',
        scores: { guardrailEngineer: 2, systemArchitect: 1 },
      },
    ],
  },
  {
    id: 'definitionOfDone',
    text: 'A task is "done" when...',
    options: [
      {
        text: 'It works. Ship it.',
        scores: { sprintCaptain: 2, autoAccept: 1 },
      },
      {
        text: 'Tests pass AND the code is clean AND the PR description is written.',
        scores: { guardrailEngineer: 3 },
      },
      {
        text: 'I\u2019ve verified it independently at least twice.',
        scores: { secondOpinion: 3 },
      },
      {
        text: 'It fits the architectural vision and handles edge cases gracefully.',
        scores: { systemArchitect: 3 },
      },
    ],
  },
  {
    id: 'idealWorkflow',
    text: 'Your ideal Claude Code workflow looks like...',
    options: [
      {
        text: 'Quick question \u2192 quick answer \u2192 repeat until done.',
        scores: { windowStarter: 3 },
      },
      {
        text: 'Plan \u2192 execute \u2192 review \u2192 ship. Like a proper sprint.',
        scores: { batchBuilder: 2, guardrailEngineer: 1 },
      },
      {
        text: 'One meticulously crafted prompt \u2192 one perfect generation.',
        scores: { promptPerfectionist: 3 },
      },
      {
        text: 'Ship fast, fix forward. Velocity over perfection.',
        scores: { sprintCaptain: 2, autoAccept: 1 },
      },
    ],
  },
  {
    id: 'newProject',
    text: 'Starting a brand new project, you first...',
    options: [
      {
        text: 'Jump right in. Structure will emerge organically.',
        scores: { sprintCaptain: 2, windowStarter: 1 },
      },
      {
        text: 'Set up the test framework, CI pipeline, and linter.',
        scores: { guardrailEngineer: 3 },
      },
      {
        text: 'Design the architecture \u2014 interfaces, modules, data flow.',
        scores: { systemArchitect: 3 },
      },
      {
        text: 'Write a detailed project brief / CLAUDE.md for Claude.',
        scores: { promptPerfectionist: 2, batchBuilder: 1 },
      },
    ],
  },
  {
    id: 'whileWaiting',
    text: 'While Claude is processing a complex task, you...',
    options: [
      {
        text: 'Start another Claude session in a different terminal.',
        scores: { sprintCaptain: 2 },
      },
      {
        text: 'Watch the output scroll by and mentally review it.',
        scores: { secondOpinion: 1, guardrailEngineer: 1 },
      },
      {
        text: 'Work on something completely unrelated.',
        scores: { batchBuilder: 2 },
      },
      {
        text: 'Scroll through social media. Honestly.',
        scores: { windowStarter: 2 },
      },
    ],
  },
];
