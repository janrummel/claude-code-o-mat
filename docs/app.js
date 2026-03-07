// ═══════════════════════════════════════════════════════════
// Claude Code-o-mat — Browser Quiz
// Zero dependencies, zero data collection, zero network requests
// ═══════════════════════════════════════════════════════════

// ═══ TYPE DEFINITIONS ═══
const TYPES = {
  windowStarter: {
    name: 'The Window Starter',
    emoji: '🪟',
    oneLiner: '"Just a quick question..." → 4 hours later',
    superpower: 'Rapid exploration and iteration. You discover solutions others miss because you keep poking at the problem from different angles.',
    bossFight: 'Session fragmentation — 50 tiny chats, zero coherent progress.',
    fix: '🚧 Session Gate — before opening Claude, write your goal in ONE sentence. If you can\'t, you\'re not ready.',
  },
  batchBuilder: {
    name: 'The Batch Builder',
    emoji: '📦',
    oneLiner: 'Collects tasks like Pokémon, then deploys in one focused sprint',
    superpower: 'Deep, focused sessions that produce real outcomes. Your batches are legendary — one sit-down, five features shipped.',
    bossFight: 'Over-batching — your queue grows faster than you clear it.',
    fix: '🎯 2-Task Rule — if your batch has more than 5 items, split it into two sessions. Shipped > planned.',
  },
  promptPerfectionist: {
    name: 'The Prompt Perfectionist',
    emoji: '💎',
    oneLiner: 'Believes the perfect prompt exists. Will find it.',
    superpower: 'Consistently high-quality outputs because your instructions leave zero room for misinterpretation. Your CLAUDE.md is a work of art.',
    bossFight: 'Prompt paralysis — 20 minutes crafting, 2 minutes coding.',
    fix: '⏱️ Good Enough Gate — set a 3-minute timer per prompt. When it rings, hit send.',
  },
  secondOpinion: {
    name: 'The Second-Opinion Seeker',
    emoji: '🔍',
    oneLiner: '"Looks right... but can you double-check?"',
    superpower: 'You catch bugs and hallucinations others miss. Your verification loops are annoying—and they save production.',
    bossFight: 'Validation spirals that kill momentum — three rounds of "are you sure?" before a one-line change.',
    fix: '✅ Trust Threshold — if two independent checks agree, ship it. No third opinion needed.',
  },
  autoAccept: {
    name: 'The Auto-Accept Gambler',
    emoji: '🎰',
    oneLiner: 'Reads diffs like Terms of Service — scroll, scroll, accept',
    superpower: 'Insane throughput when the AI is on point. You ship more before lunch than most do all day.',
    bossFight: 'The one diff you didn\'t read that mass-deleted your auth middleware.',
    fix: '🎲 Diff Roulette — actually read at least every 3rd diff fully. Your future self will thank you.',
  },
  sprintCaptain: {
    name: 'The Sprint Captain',
    emoji: '⚡',
    oneLiner: 'Ships features like every day is a hackathon',
    superpower: 'Raw momentum. When you\'re in the zone, features materialize faster than PMs can write tickets.',
    bossFight: 'Tech debt piling up behind the sprint like dishes after a party.',
    fix: '🧊 Cooldown Round — after every 3 features, spend one session on cleanup. Future-you is a stakeholder too.',
  },
  guardrailEngineer: {
    name: 'The Guardrail Engineer',
    emoji: '🛡️',
    oneLiner: 'Moves fast, but always with a safety net underneath',
    superpower: 'Speed AND reliability — the unicorn combo. Your tests catch what your eyes miss, and your CI never lies.',
    bossFight: 'Over-engineering safety for trivial changes — writing 50 lines of tests for a color tweak.',
    fix: '📡 Risk Radar — match review depth to change risk. A typo fix ≠ an auth refactor.',
  },
  systemArchitect: {
    name: 'The System Architect',
    emoji: '🏗️',
    oneLiner: 'Thinks in interfaces and modules before writing a single line',
    superpower: 'Code that ages like fine wine — extensible, clean, and robust. Six months later, it still makes sense.',
    bossFight: 'Analysis paralysis — the perfect architecture exists only in your head while the deadline passes.',
    fix: '🔨 Prototype First — build a rough working version before optimizing. Ugly code that runs beats beautiful code that doesn\'t.',
  },
};

const TYPE_ORDER = [
  'windowStarter', 'batchBuilder', 'promptPerfectionist', 'secondOpinion',
  'autoAccept', 'sprintCaptain', 'guardrailEngineer', 'systemArchitect',
];

// ═══ BADGES ═══
const BADGES = {
  contextHoarder: { name: 'Context Hoarder', emoji: '🧠' },
  nightOwl: { name: 'Night Owl', emoji: '🦉' },
  toolHopper: { name: 'Tool Hopper', emoji: '🦘' },
  wallCrasher: { name: 'Wall Crasher', emoji: '🧱' },
  parallelJuggler: { name: 'Parallel Juggler', emoji: '🧶' },
};

const BADGE_TRIGGERS = {
  context: { 0: 'contextHoarder' },
  lateNight: { 0: 'nightOwl', 2: 'nightOwl' },
  rateLimit: { 1: 'toolHopper', 2: 'wallCrasher' },
  whileWaiting: { 0: 'parallelJuggler' },
};

// ═══ QUESTIONS ═══
const QUESTIONS = [
  {
    id: 'sessionStart',
    text: 'How does a typical Claude Code session begin for you?',
    options: [
      { text: '"Hey Claude, quick question..." (you say this 12 times a day)', scores: { windowStarter: 3 } },
      { text: 'I mentally queue up 5+ tasks, then sit down for a proper session', scores: { batchBuilder: 3 } },
      { text: 'I craft a detailed prompt with constraints, examples, and context', scores: { promptPerfectionist: 3 } },
      { text: 'I open the terminal and start typing — inspiration strikes mid-keystroke', scores: { sprintCaptain: 2, autoAccept: 1 } },
    ],
  },
  {
    id: 'eightyPercent',
    text: 'Your feature is ~80% done. What\'s your move?',
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
      { text: 'Accept all. Life\'s too short to read every diff.', scores: { autoAccept: 3 } },
      { text: 'Read every single line. Sometimes rewrite parts by hand.', scores: { promptPerfectionist: 2, guardrailEngineer: 1 } },
      { text: 'Run the tests — if they\'re green, it ships.', scores: { guardrailEngineer: 3 } },
      { text: 'Ask "Are you sure about this approach?" at least once.', scores: { secondOpinion: 3 } },
    ],
  },
  {
    id: 'claudeMd',
    text: 'Your CLAUDE.md file is...',
    options: [
      { text: 'My what now?', scores: { windowStarter: 3 } },
      { text: 'A masterpiece. Constraints, conventions, examples — all curated.', scores: { promptPerfectionist: 3 } },
      { text: 'Practical — project structure, key rules, test commands.', scores: { guardrailEngineer: 2, batchBuilder: 1 } },
      { text: 'A living document — I update it mid-session when I learn something.', scores: { systemArchitect: 2, sprintCaptain: 1 } },
    ],
  },
  {
    id: 'context',
    text: 'When it comes to giving Claude context, you...',
    options: [
      { text: 'Paste the whole README + file tree. Context is king.', scores: { windowStarter: 1, secondOpinion: 1 } },
      { text: 'Keep it minimal. Claude should figure it out.', scores: { autoAccept: 2, sprintCaptain: 1 } },
      { text: 'Carefully curate context per task — relevant files only.', scores: { promptPerfectionist: 2, systemArchitect: 1 } },
      { text: 'Let the conversation grow naturally. Context accumulates.', scores: { windowStarter: 2, batchBuilder: 1 } },
    ],
  },
  {
    id: 'lateNight',
    text: 'It\'s 11 PM on a Tuesday. You\'re...',
    options: [
      { text: '"Just one more prompt..." (you\'ve said this 6 times already)', scores: { windowStarter: 2 } },
      { text: 'Asleep. Coding has office hours.', scores: { batchBuilder: 2, guardrailEngineer: 1 } },
      { text: 'Running a batch of refactors before bed. Peak productivity.', scores: { sprintCaptain: 2, batchBuilder: 1 } },
      { text: 'Writing tomorrow\'s prompts in a notes app.', scores: { promptPerfectionist: 2, systemArchitect: 1 } },
    ],
  },
  {
    id: 'uncertainty',
    text: 'Claude gives an answer you\'re not 100% sure about. You...',
    options: [
      { text: '"Can you explain your reasoning step by step?"', scores: { secondOpinion: 3 } },
      { text: 'Google it to cross-reference.', scores: { secondOpinion: 2, guardrailEngineer: 1 } },
      { text: 'Trust the vibes and move on.', scores: { autoAccept: 3 } },
      { text: 'Write a test to verify the behavior empirically.', scores: { guardrailEngineer: 3 } },
    ],
  },
  {
    id: 'sessionCount',
    text: 'How many Claude Code sessions do you run on a typical day?',
    options: [
      { text: 'One big deep session — quality over quantity.', scores: { batchBuilder: 3 } },
      { text: '3–5 focused sessions with clear goals each.', scores: { sprintCaptain: 2, guardrailEngineer: 1 } },
      { text: 'Lost count. It\'s basically always open.', scores: { windowStarter: 3 } },
      { text: '1–2 highly structured sessions with a written agenda.', scores: { systemArchitect: 2, batchBuilder: 1 } },
    ],
  },
  {
    id: 'rateLimit',
    text: 'You hit a rate limit. Your immediate reaction?',
    options: [
      { text: 'Finally take that break you\'ve been postponing.', scores: { batchBuilder: 2, guardrailEngineer: 1 } },
      { text: 'Switch to ChatGPT / Gemini / Copilot instantly.', scores: { windowStarter: 1, sprintCaptain: 1 } },
      { text: 'Frustrated — I was IN THE ZONE!', scores: { sprintCaptain: 2 } },
      { text: 'Review what Claude produced so far while waiting.', scores: { guardrailEngineer: 2, systemArchitect: 1 } },
    ],
  },
  {
    id: 'definitionOfDone',
    text: 'A task is "done" when...',
    options: [
      { text: 'It works. Ship it.', scores: { sprintCaptain: 2, autoAccept: 1 } },
      { text: 'Tests pass AND the code is clean AND the PR description is written.', scores: { guardrailEngineer: 3 } },
      { text: 'I\'ve verified it independently at least twice.', scores: { secondOpinion: 3 } },
      { text: 'It fits the architectural vision and handles edge cases gracefully.', scores: { systemArchitect: 3 } },
    ],
  },
  {
    id: 'idealWorkflow',
    text: 'Your ideal Claude Code workflow looks like...',
    options: [
      { text: 'Quick question → quick answer → repeat until done.', scores: { windowStarter: 3 } },
      { text: 'Plan → execute → review → ship. Like a proper sprint.', scores: { batchBuilder: 2, guardrailEngineer: 1 } },
      { text: 'One meticulously crafted prompt → one perfect generation.', scores: { promptPerfectionist: 3 } },
      { text: 'Ship fast, fix forward. Velocity over perfection.', scores: { sprintCaptain: 2, autoAccept: 1 } },
    ],
  },
  {
    id: 'newProject',
    text: 'Starting a brand new project, you first...',
    options: [
      { text: 'Jump right in. Structure will emerge organically.', scores: { sprintCaptain: 2, windowStarter: 1 } },
      { text: 'Set up the test framework, CI pipeline, and linter.', scores: { guardrailEngineer: 3 } },
      { text: 'Design the architecture — interfaces, modules, data flow.', scores: { systemArchitect: 3 } },
      { text: 'Write a detailed project brief / CLAUDE.md for Claude.', scores: { promptPerfectionist: 2, batchBuilder: 1 } },
    ],
  },
  {
    id: 'whileWaiting',
    text: 'While Claude is processing a complex task, you...',
    options: [
      { text: 'Start another Claude session in a different terminal.', scores: { sprintCaptain: 2 } },
      { text: 'Watch the output scroll by and mentally review it.', scores: { secondOpinion: 1, guardrailEngineer: 1 } },
      { text: 'Work on something completely unrelated.', scores: { batchBuilder: 2 } },
      { text: 'Scroll through social media. Honestly.', scores: { windowStarter: 2 } },
    ],
  },
];

// ═══ STATE ═══
let currentQuestion = 0;
let answers = [];

// ═══ DOM HELPERS ═══
const $ = (sel) => document.querySelector(sel);
const show = (id) => {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
};

// ═══ SCORING ═══
function calculateResult(answers) {
  const scores = {};
  TYPE_ORDER.forEach((id) => (scores[id] = 0));

  const contributions = [];

  answers.forEach(({ questionId, optionIndex }) => {
    const question = QUESTIONS.find((q) => q.id === questionId);
    if (!question) return;
    const option = question.options[optionIndex];
    if (!option) return;

    Object.entries(option.scores).forEach(([typeId, points]) => {
      scores[typeId] = (scores[typeId] || 0) + points;
      contributions.push({
        questionText: question.text,
        answerText: option.text,
        typeId,
        points,
      });
    });
  });

  // Winner
  let winningTypeId = TYPE_ORDER[0];
  let highScore = scores[TYPE_ORDER[0]];
  TYPE_ORDER.forEach((id) => {
    if (scores[id] > highScore) {
      highScore = scores[id];
      winningTypeId = id;
    }
  });

  // Badges
  const earnedBadges = [];
  const seen = new Set();
  answers.forEach(({ questionId, optionIndex }) => {
    const triggers = BADGE_TRIGGERS[questionId];
    if (triggers && triggers[optionIndex] !== undefined) {
      const badgeId = triggers[optionIndex];
      if (!seen.has(badgeId)) {
        seen.add(badgeId);
        earnedBadges.push(BADGES[badgeId]);
      }
    }
  });

  // Why bullets
  const whyBullets = contributions
    .filter((c) => c.typeId === winningTypeId)
    .sort((a, b) => b.points - a.points)
    .slice(0, 3)
    .map((c) => trimText(c.answerText, 70));

  // Runner-up
  let runnerUpId = null;
  let runnerUpScore = -1;
  TYPE_ORDER.forEach((id) => {
    if (id !== winningTypeId && scores[id] > runnerUpScore) {
      runnerUpScore = scores[id];
      runnerUpId = id;
    }
  });

  return {
    typeId: winningTypeId,
    type: TYPES[winningTypeId],
    earnedBadges: earnedBadges.slice(0, 3),
    whyBullets,
    runnerUpId,
    runnerUpType: runnerUpId ? TYPES[runnerUpId] : null,
  };
}

function trimText(text, maxLen) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + '…';
}

// ═══ QUIZ FLOW ═══
function startQuiz() {
  currentQuestion = 0;
  answers = [];
  show('quiz');
  renderQuestion(0);
  updateBackButton();
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const total = QUESTIONS.length;

  $('#progress-text').textContent = `Question ${index + 1} of ${total}`;
  $('#progress-fill').style.width = `${((index) / total) * 100}%`;
  $('#question-text').textContent = q.text;

  const container = $('#options-container');
  container.innerHTML = '';

  q.options.forEach((opt, i) => {
    const card = document.createElement('button');
    card.className = 'option-card';
    card.textContent = opt.text;
    card.onclick = () => selectAnswer(q.id, i, card);
    container.appendChild(card);
  });
}

function selectAnswer(questionId, optionIndex, card) {
  // Disable all options
  document.querySelectorAll('.option-card').forEach((c) => {
    c.classList.add('disabled');
  });
  card.classList.add('selected');

  answers.push({ questionId, optionIndex });

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion >= QUESTIONS.length) {
      $('#progress-fill').style.width = '100%';
      showAnalyzing();
    } else {
      // Transition
      const quizContainer = $('.quiz-container');
      quizContainer.classList.add('transitioning');

      setTimeout(() => {
        renderQuestion(currentQuestion);
        updateBackButton();
        quizContainer.classList.remove('transitioning');
        quizContainer.classList.add('entering');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            quizContainer.classList.remove('entering');
          });
        });
      }, 250);
    }
  }, 350);
}

function showAnalyzing() {
  show('analyzing');

  setTimeout(() => {
    const result = calculateResult(answers);
    renderResult(result);
    show('result');
  }, 2000);
}

// ═══ RESULT RENDERING ═══
function renderResult(result) {
  const { type, earnedBadges, whyBullets, runnerUpType } = result;

  $('#result-emoji').textContent = type.emoji;
  $('#result-name').textContent = type.name.toUpperCase();

  const displayOneLiner = type.oneLiner.startsWith('"') ? type.oneLiner : `"${type.oneLiner}"`;
  $('#result-oneliner').textContent = displayOneLiner;

  $('#result-superpower').textContent = type.superpower;
  $('#result-bossfight').textContent = type.bossFight;
  $('#result-fix').textContent = type.fix;

  // Badges
  if (earnedBadges.length > 0) {
    $('#badges-section').style.display = '';
    const list = $('#badges-list');
    list.innerHTML = '';
    earnedBadges.forEach((b) => {
      const chip = document.createElement('span');
      chip.className = 'badge-chip';
      chip.textContent = `${b.emoji} ${b.name}`;
      list.appendChild(chip);
    });
  } else {
    $('#badges-section').style.display = 'none';
  }

  // Runner-up
  if (runnerUpType) {
    $('#runner-up').style.display = '';
    $('#runner-up-text').textContent = `${runnerUpType.emoji} ${runnerUpType.name}`;
  } else {
    $('#runner-up').style.display = 'none';
  }

  // Why bullets
  const whyList = $('#why-list');
  whyList.innerHTML = '';
  whyBullets.forEach((bullet) => {
    const li = document.createElement('li');
    li.textContent = bullet;
    whyList.appendChild(li);
  });

  // LinkedIn snippet
  $('#snippet-text').textContent = generateSnippet(result);
}

function generateSnippet(result) {
  const { type, earnedBadges } = result;

  const displayOneLiner = type.oneLiner.startsWith('"') ? type.oneLiner : `"${type.oneLiner}"`;
  const typeName = type.name.startsWith('The ') ? type.name : `a ${type.name}`;

  let s = `🤖 I just took the Claude Code-o-mat quiz!\n\n`;
  s += `I'm ${typeName} — ${displayOneLiner}\n\n`;
  s += `💪 Superpower: ${type.superpower}\n`;
  s += `🐉 Boss fight: ${type.bossFight}\n`;
  s += `🛠️ Fix: ${type.fix}\n`;

  if (earnedBadges.length > 0) {
    s += `🏷️ ${earnedBadges.map((b) => `${b.emoji} ${b.name}`).join(' · ')}\n`;
  }

  s += `\nWhat's YOUR Claude Code type? Try it:\n`;
  s += `→ janrummel.github.io/claude-code-o-mat\n\n`;
  s += `#ClaudeCode #ClaudeCodeOmat #CodingWithAI`;

  return s;
}

// ═══ ACTIONS ═══
function copySnippet() {
  const text = $('#snippet-text').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = $('#copy-btn');
    btn.textContent = '✓ Copied!';
    btn.style.background = 'var(--green)';
    setTimeout(() => {
      btn.textContent = 'Copy to clipboard';
      btn.style.background = '';
    }, 2000);
  });
}

function retakeQuiz() {
  currentQuestion = 0;
  answers = [];
  show('landing');
}

function shareOnLinkedIn() {
  const url = encodeURIComponent('https://janrummel.github.io/claude-code-o-mat');
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener');
}

function goBack() {
  if (currentQuestion <= 0) return;
  answers.pop();
  currentQuestion--;
  renderQuestion(currentQuestion);
  updateBackButton();
}

function updateBackButton() {
  const btn = $('#back-btn');
  if (btn) btn.style.display = currentQuestion > 0 ? '' : 'none';
}
