// ═══════════════════════════════════════════════════════════
// Claude Code-o-mat — Browser Quiz
// Zero dependencies, zero data collection, zero network requests
// ═══════════════════════════════════════════════════════════

// ═══ LOCALES ═══
const LOCALES = {
  en: {
    ui: {
      quizSubtitle: 'What Claude Code coding type are you?',
      questionCount: '10 questions · ~90 sec · zero data collected',
      disclaimer: 'Not a psychological test. Just a playful self-reflection game.',
      startQuiz: 'Start Quiz',
      analyzing: 'Analyzing your coding patterns...',
      questionOf: 'of',
      question: 'Question',
      youAre: 'You are',
      superpower: 'Superpower',
      bossFight: 'Boss fight',
      fix: 'Fix',
      badges: 'Badges',
      runnerUp: 'Runner-up',
      whyThisType: 'Why this type?',
      reflection: '🌱 This is a playful self-reflection, not a diagnosis. Patterns can shift — and noticing them is the first step to choosing them.',
      shareOnLinkedIn: 'Share on LinkedIn',
      copyToClipboard: 'Copy to clipboard',
      copied: '✓ Copied!',
      retakeQuiz: '↻ Retake Quiz',
      back: '← Back',
      linkedinSectionTitle: '📋 Share on LinkedIn',
      linkedinIntro: '🤖 I just took the Claude Code-o-mat quiz!',
      linkedinIm: "I'm",
      linkedinCta: "What's YOUR Claude Code type? Try it:",
      noData: 'No data collected. Ever.',
    },
    types: {
      windowStarter: { name: 'The Window Starter', emoji: '🪟', oneLiner: '"Just a quick question..." → 4 hours later', superpower: 'Rapid exploration and iteration. You discover solutions others miss because you keep poking at the problem from different angles.', bossFight: 'Session fragmentation — 50 tiny chats, zero coherent progress.', fix: '🚧 Session Gate — before opening Claude, write your goal in ONE sentence. If you can\'t, you\'re not ready.' },
      batchBuilder: { name: 'The Batch Builder', emoji: '📦', oneLiner: 'Collects tasks like Pokémon, then deploys in one focused sprint', superpower: 'Deep, focused sessions that produce real outcomes. Your batches are legendary — one sit-down, five features shipped.', bossFight: 'Over-batching — your queue grows faster than you clear it.', fix: '🎯 2-Task Rule — if your batch has more than 5 items, split it into two sessions. Shipped > planned.' },
      promptPerfectionist: { name: 'The Prompt Perfectionist', emoji: '💎', oneLiner: 'Believes the perfect prompt exists. Will find it.', superpower: 'Consistently high-quality outputs because your instructions leave zero room for misinterpretation. Your CLAUDE.md is a work of art.', bossFight: 'Prompt paralysis — 20 minutes crafting, 2 minutes coding.', fix: '⏱️ Good Enough Gate — set a 3-minute timer per prompt. When it rings, hit send.' },
      secondOpinion: { name: 'The Second-Opinion Seeker', emoji: '🔍', oneLiner: '"Looks right... but can you double-check?"', superpower: 'You catch bugs and hallucinations others miss. Your verification loops are annoying—and they save production.', bossFight: 'Validation spirals that kill momentum — three rounds of "are you sure?" before a one-line change.', fix: '✅ Trust Threshold — if two independent checks agree, ship it. No third opinion needed.' },
      autoAccept: { name: 'The Auto-Accept Gambler', emoji: '🎰', oneLiner: 'Reads diffs like Terms of Service — scroll, scroll, accept', superpower: 'Insane throughput when the AI is on point. You ship more before lunch than most do all day.', bossFight: 'The one diff you didn\'t read that mass-deleted your auth middleware.', fix: '🎲 Diff Roulette — actually read at least every 3rd diff fully. Your future self will thank you.' },
      sprintCaptain: { name: 'The Sprint Captain', emoji: '⚡', oneLiner: 'Ships features like every day is a hackathon', superpower: 'Raw momentum. When you\'re in the zone, features materialize faster than PMs can write tickets.', bossFight: 'Tech debt piling up behind the sprint like dishes after a party.', fix: '🧊 Cooldown Round — after every 3 features, spend one session on cleanup. Future-you is a stakeholder too.' },
      guardrailEngineer: { name: 'The Guardrail Engineer', emoji: '🛡️', oneLiner: 'Moves fast, but always with a safety net underneath', superpower: 'Speed AND reliability — the unicorn combo. Your tests catch what your eyes miss, and your CI never lies.', bossFight: 'Over-engineering safety for trivial changes — writing 50 lines of tests for a color tweak.', fix: '📡 Risk Radar — match review depth to change risk. A typo fix ≠ an auth refactor.' },
      systemArchitect: { name: 'The System Architect', emoji: '🏗️', oneLiner: 'Thinks in interfaces and modules before writing a single line', superpower: 'Code that ages like fine wine — extensible, clean, and robust. Six months later, it still makes sense.', bossFight: 'Analysis paralysis — the perfect architecture exists only in your head while the deadline passes.', fix: '🔨 Prototype First — build a rough working version before optimizing. Ugly code that runs beats beautiful code that doesn\'t.' },
    },
    questions: [
      { id: 'sessionStart', text: 'How does a typical Claude Code session begin for you?', options: [
        { text: '"Hey Claude, quick question..." (you say this 12 times a day)', scores: { windowStarter: 3 } },
        { text: 'I mentally queue up 5+ tasks, then sit down for a proper session', scores: { batchBuilder: 3 } },
        { text: 'I craft a detailed prompt with constraints, examples, and context', scores: { promptPerfectionist: 3 } },
        { text: 'I open the terminal and start typing — inspiration strikes mid-keystroke', scores: { sprintCaptain: 2, autoAccept: 1 } },
      ]},
      { id: 'eightyPercent', text: 'Your feature is ~80% done. What\'s your move?', options: [
        { text: 'Ship it. Iterate later. Done is better than perfect.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Write tests for the remaining edge cases before merging', scores: { guardrailEngineer: 3 } },
        { text: 'Ask Claude to review its own work and explain potential issues', scores: { secondOpinion: 3 } },
        { text: 'Pause and reconsider the interface design before going further', scores: { systemArchitect: 3 } },
      ]},
      { id: 'codeChanges', text: 'Claude suggests a batch of code changes. You...', options: [
        { text: 'Accept all. Life\'s too short to read every diff.', scores: { autoAccept: 3 } },
        { text: 'Read every single line. Sometimes rewrite parts by hand.', scores: { promptPerfectionist: 3 } },
        { text: 'Run the tests — if they\'re green, it ships.', scores: { guardrailEngineer: 3 } },
        { text: 'Ask "Are you sure about this approach?" at least once.', scores: { secondOpinion: 3 } },
      ]},
      { id: 'claudeMd', text: 'Your CLAUDE.md file is...', options: [
        { text: 'My what now?', scores: { windowStarter: 3 } },
        { text: 'A masterpiece. Constraints, conventions, examples — all curated.', scores: { promptPerfectionist: 3 } },
        { text: 'Practical — project structure, key rules, test commands.', scores: { batchBuilder: 2, guardrailEngineer: 1 } },
        { text: 'A living document — I update it mid-session when I learn something.', scores: { systemArchitect: 2, sprintCaptain: 1 } },
      ]},
      { id: 'context', text: 'When it comes to giving Claude context, you...', options: [
        { text: 'Paste the whole README + file tree. Context is king.', scores: { windowStarter: 3 } },
        { text: 'Keep it minimal. Claude should figure it out.', scores: { autoAccept: 3 } },
        { text: 'Carefully curate context per task — relevant files only.', scores: { systemArchitect: 2, promptPerfectionist: 1 } },
        { text: 'Let the conversation grow naturally. Context accumulates.', scores: { windowStarter: 2, batchBuilder: 1 } },
      ]},
      { id: 'uncertainty', text: 'Claude gives an answer you\'re not 100% sure about. You...', options: [
        { text: '"Can you explain your reasoning step by step?"', scores: { secondOpinion: 3 } },
        { text: 'Google it to cross-reference.', scores: { secondOpinion: 2, guardrailEngineer: 1 } },
        { text: 'Trust the vibes and move on.', scores: { autoAccept: 3 } },
        { text: 'Write a test to verify the behavior empirically.', scores: { guardrailEngineer: 3 } },
      ]},
      { id: 'rateLimit', text: 'You hit a rate limit. Your immediate reaction?', options: [
        { text: 'Finally take that break you\'ve been postponing.', scores: { batchBuilder: 3 } },
        { text: 'Switch to ChatGPT / Gemini / Copilot instantly.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Frustrated — I was IN THE ZONE!', scores: { sprintCaptain: 3 } },
        { text: 'Review what Claude produced so far while waiting.', scores: { systemArchitect: 2, guardrailEngineer: 1 } },
      ]},
      { id: 'definitionOfDone', text: 'A task is "done" when...', options: [
        { text: 'It works. Ship it.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Tests pass AND the code is clean AND the PR description is written.', scores: { guardrailEngineer: 3 } },
        { text: 'I\'ve verified it independently at least twice.', scores: { secondOpinion: 3 } },
        { text: 'It fits the architectural vision and handles edge cases gracefully.', scores: { systemArchitect: 3 } },
      ]},
      { id: 'newProject', text: 'Starting a brand new project, you first...', options: [
        { text: 'Jump right in. Structure will emerge organically.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Set up the test framework, CI pipeline, and linter.', scores: { guardrailEngineer: 3 } },
        { text: 'Design the architecture — interfaces, modules, data flow.', scores: { systemArchitect: 3 } },
        { text: 'Write a detailed project brief / CLAUDE.md for Claude.', scores: { promptPerfectionist: 2, batchBuilder: 1 } },
      ]},
      { id: 'whileWaiting', text: 'While Claude is processing a complex task, you...', options: [
        { text: 'Start another Claude session in a different terminal.', scores: { sprintCaptain: 3 } },
        { text: 'Watch the output scroll by and mentally review it.', scores: { secondOpinion: 3 } },
        { text: 'Work on something completely unrelated.', scores: { batchBuilder: 3 } },
        { text: 'Scroll through social media. Honestly.', scores: { windowStarter: 3 } },
      ]},
    ],
  },
  de: {
    ui: {
      quizSubtitle: 'Welcher Claude Code Coding-Typ bist du?',
      questionCount: '10 Fragen · ~90 Sek · keine Daten gesammelt',
      disclaimer: 'Kein psychologischer Test. Nur ein spielerisches Selbstreflexions-Spiel.',
      startQuiz: 'Quiz starten',
      analyzing: 'Analysiere deine Coding-Patterns...',
      questionOf: 'von',
      question: 'Frage',
      youAre: 'Du bist',
      superpower: 'Superpower',
      bossFight: 'Boss-Fight',
      fix: 'Fix',
      badges: 'Badges',
      runnerUp: 'Runner-up',
      whyThisType: 'Warum dieser Typ?',
      reflection: '🌱 Das ist eine spielerische Selbstreflexion, keine Diagnose. Muster können sich ändern — und sie zu bemerken ist der erste Schritt, sie bewusst zu wählen.',
      shareOnLinkedIn: 'Auf LinkedIn teilen',
      copyToClipboard: 'In die Zwischenablage',
      copied: '✓ Kopiert!',
      retakeQuiz: '↻ Quiz wiederholen',
      back: '← Zurück',
      linkedinSectionTitle: '📋 Auf LinkedIn teilen',
      linkedinIntro: '🤖 Ich habe gerade das Claude Code-o-mat Quiz gemacht!',
      linkedinIm: 'Ich bin',
      linkedinCta: 'Was ist DEIN Claude Code Typ? Probiers aus:',
      noData: 'Keine Daten gesammelt. Nie.',
    },
    types: {
      windowStarter: { name: 'Der Window-Starter', emoji: '🪟', oneLiner: '"Nur eine kurze Frage..." → 4 Stunden später', superpower: 'Schnelle Erkundung und Iteration. Du findest Lösungen, die andere übersehen, weil du das Problem immer wieder von neuen Seiten angehst.', bossFight: 'Session-Fragmentierung — 50 kleine Chats, null kohärenter Fortschritt.', fix: '🚧 Session Gate — bevor du Claude öffnest, schreib dein Ziel in EINEM Satz. Wenn du das nicht kannst, bist du noch nicht bereit.' },
      batchBuilder: { name: 'Der Batch-Builder', emoji: '📦', oneLiner: 'Sammelt Tasks wie Pokémon, deployed dann in einem fokussierten Sprint', superpower: 'Tiefe, fokussierte Sessions mit echten Ergebnissen. Deine Batches sind legendär — ein Anlauf, fünf Features shipped.', bossFight: 'Über-Batching — deine Queue wächst schneller als du sie abarbeitest.', fix: '🎯 2-Task-Regel — wenn dein Batch mehr als 5 Punkte hat, teil ihn in zwei Sessions. Shipped > planned.' },
      promptPerfectionist: { name: 'Der Prompt-Perfektionist', emoji: '💎', oneLiner: 'Glaubt, dass der perfekte Prompt existiert. Wird ihn finden.', superpower: 'Konstant hochwertige Ergebnisse, weil deine Anweisungen null Raum für Fehlinterpretation lassen. Deine CLAUDE.md ist ein Kunstwerk.', bossFight: 'Prompt-Paralyse — 20 Minuten formulieren, 2 Minuten coden.', fix: '⏱️ Good-Enough-Gate — stell dir einen 3-Minuten-Timer pro Prompt. Wenn er klingelt: abschicken.' },
      secondOpinion: { name: 'Der Zweitgutachter', emoji: '🔍', oneLiner: '"Sieht richtig aus... aber kannst du nochmal prüfen?"', superpower: 'Du fängst Bugs und Halluzinationen, die andere übersehen. Deine Verification-Loops sind nervig — und retten die Produktion.', bossFight: 'Validierungs-Spiralen, die jedes Momentum töten — drei Runden "bist du sicher?" vor einem Einzeiler.', fix: '✅ Trust Threshold — wenn zwei unabhängige Checks übereinstimmen: shippen. Keine dritte Meinung nötig.' },
      autoAccept: { name: 'Der Auto-Accept-Zocker', emoji: '🎰', oneLiner: 'Liest Diffs wie AGBs — scrollen, scrollen, akzeptieren', superpower: 'Irrer Durchsatz, wenn die KI gut drauf ist. Du shippst vor dem Mittag mehr als die meisten am ganzen Tag.', bossFight: 'Der eine Diff, den du nicht gelesen hast und der deine Auth-Middleware gelöscht hat.', fix: '🎲 Diff-Roulette — lies mindestens jeden dritten Diff komplett. Dein zukünftiges Ich wird es dir danken.' },
      sprintCaptain: { name: 'Der Sprint-Captain', emoji: '⚡', oneLiner: 'Shipped Features als wäre jeder Tag ein Hackathon', superpower: 'Pures Momentum. Wenn du im Flow bist, materialisieren sich Features schneller als PMs Tickets schreiben können.', bossFight: 'Tech Debt, die sich hinter dem Sprint aufstapelt wie Geschirr nach einer Party.', fix: '🧊 Cooldown-Runde — nach jedem 3. Feature eine Session für Aufräumarbeiten. Future-You ist auch ein Stakeholder.' },
      guardrailEngineer: { name: 'Der Guardrail-Engineer', emoji: '🛡️', oneLiner: 'Schnell unterwegs, aber immer mit Sicherheitsnetz', superpower: 'Speed UND Zuverlässigkeit — das Einhorn-Kombo. Deine Tests fangen, was deine Augen übersehen, und deine CI lügt nie.', bossFight: 'Over-Engineering von Sicherheit für triviale Änderungen — 50 Zeilen Tests für einen Farbwechsel.', fix: '📡 Risk Radar — pass die Review-Tiefe dem Änderungs-Risiko an. Ein Typo-Fix ≠ ein Auth-Refactor.' },
      systemArchitect: { name: 'Der System-Architekt', emoji: '🏗️', oneLiner: 'Denkt in Interfaces und Modulen bevor eine einzige Zeile geschrieben wird', superpower: 'Code, der wie guter Wein altert — erweiterbar, sauber, robust. Sechs Monate später ergibt er immer noch Sinn.', bossFight: 'Analyse-Paralyse — die perfekte Architektur existiert nur in deinem Kopf während die Deadline vorbeirauscht.', fix: '🔨 Prototype First — bau eine grobe, funktionierende Version bevor du optimierst. Hässlicher Code der läuft schlägt schönen Code der nicht läuft.' },
    },
    questions: [
      { id: 'sessionStart', text: 'Wie beginnt eine typische Claude Code Session bei dir?', options: [
        { text: '"Hey Claude, kurze Frage..." (das sagst du 12 Mal am Tag)', scores: { windowStarter: 3 } },
        { text: 'Ich sammle im Kopf 5+ Tasks, dann setze ich mich für eine richtige Session hin', scores: { batchBuilder: 3 } },
        { text: 'Ich formuliere einen detaillierten Prompt mit Constraints, Beispielen und Kontext', scores: { promptPerfectionist: 3 } },
        { text: 'Ich öffne das Terminal und tippe los — die Inspiration kommt beim Schreiben', scores: { sprintCaptain: 2, autoAccept: 1 } },
      ]},
      { id: 'eightyPercent', text: 'Dein Feature ist zu ~80% fertig. Wie geht es weiter?', options: [
        { text: 'Shippen. Später iterieren. Done is better than perfect.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Tests für die restlichen Edge Cases schreiben, dann erst mergen', scores: { guardrailEngineer: 3 } },
        { text: 'Claude bitten, die eigene Arbeit zu reviewen und mögliche Probleme zu erklären', scores: { secondOpinion: 3 } },
        { text: 'Innehalten und das Interface-Design nochmal überdenken', scores: { systemArchitect: 3 } },
      ]},
      { id: 'codeChanges', text: 'Claude schlägt mehrere Code-Änderungen vor. Du...', options: [
        { text: 'Akzeptierst alles. Das Leben ist zu kurz für jeden Diff.', scores: { autoAccept: 3 } },
        { text: 'Liest jede einzelne Zeile. Manchmal schreibst du Teile von Hand um.', scores: { promptPerfectionist: 3 } },
        { text: 'Lässt die Tests laufen — wenn sie grün sind, wird deployed.', scores: { guardrailEngineer: 3 } },
        { text: 'Fragst mindestens einmal: "Bist du sicher bei diesem Ansatz?"', scores: { secondOpinion: 3 } },
      ]},
      { id: 'claudeMd', text: 'Deine CLAUDE.md Datei ist...', options: [
        { text: 'Meine was?', scores: { windowStarter: 3 } },
        { text: 'Ein Meisterwerk. Constraints, Konventionen, Beispiele — alles kuratiert.', scores: { promptPerfectionist: 3 } },
        { text: 'Praktisch — Projektstruktur, wichtige Regeln, Test-Commands.', scores: { batchBuilder: 2, guardrailEngineer: 1 } },
        { text: 'Ein lebendes Dokument — ich aktualisiere es mitten in der Session.', scores: { systemArchitect: 2, sprintCaptain: 1 } },
      ]},
      { id: 'context', text: 'Wenn es darum geht, Claude Kontext zu geben...', options: [
        { text: 'Die komplette README + Dateibaum einfügen. Kontext ist King.', scores: { windowStarter: 3 } },
        { text: 'Minimal halten. Claude soll sich das selbst erschließen.', scores: { autoAccept: 3 } },
        { text: 'Pro Task sorgfältig kuratieren — nur relevante Dateien.', scores: { systemArchitect: 2, promptPerfectionist: 1 } },
        { text: 'Die Konversation natürlich wachsen lassen. Kontext baut sich auf.', scores: { windowStarter: 2, batchBuilder: 1 } },
      ]},
      { id: 'uncertainty', text: 'Claude gibt eine Antwort, bei der du dir nicht 100% sicher bist. Du...', options: [
        { text: '"Kannst du deine Argumentation Schritt für Schritt erklären?"', scores: { secondOpinion: 3 } },
        { text: 'Googelst es zur Gegenprobe.', scores: { secondOpinion: 2, guardrailEngineer: 1 } },
        { text: 'Vertraust dem Bauchgefühl und machst weiter.', scores: { autoAccept: 3 } },
        { text: 'Schreibst einen Test, um das Verhalten empirisch zu prüfen.', scores: { guardrailEngineer: 3 } },
      ]},
      { id: 'rateLimit', text: 'Du erreichst das Rate Limit. Deine spontane Reaktion?', options: [
        { text: 'Endlich die Pause machen, die längst fällig war.', scores: { batchBuilder: 3 } },
        { text: 'Sofort zu ChatGPT / Gemini / Copilot wechseln.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Frustriert — ich war IM FLOW!', scores: { sprintCaptain: 3 } },
        { text: 'Den bisherigen Output von Claude in Ruhe durchgehen.', scores: { systemArchitect: 2, guardrailEngineer: 1 } },
      ]},
      { id: 'definitionOfDone', text: 'Eine Aufgabe ist "fertig" wenn...', options: [
        { text: 'Es funktioniert. Ship it.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Tests grün UND Code sauber UND PR-Beschreibung geschrieben.', scores: { guardrailEngineer: 3 } },
        { text: 'Ich es mindestens zweimal unabhängig verifiziert habe.', scores: { secondOpinion: 3 } },
        { text: 'Es zur Architektur-Vision passt und Edge Cases elegant handelt.', scores: { systemArchitect: 3 } },
      ]},
      { id: 'newProject', text: 'Du startest ein komplett neues Projekt. Dein erster Schritt?', options: [
        { text: 'Einfach loslegen. Struktur ergibt sich von selbst.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Test-Framework, CI-Pipeline und Linter aufsetzen.', scores: { guardrailEngineer: 3 } },
        { text: 'Die Architektur designen — Interfaces, Module, Datenfluss.', scores: { systemArchitect: 3 } },
        { text: 'Einen detaillierten Project-Brief / CLAUDE.md für Claude schreiben.', scores: { promptPerfectionist: 2, batchBuilder: 1 } },
      ]},
      { id: 'whileWaiting', text: 'Während Claude an einer komplexen Aufgabe arbeitet...', options: [
        { text: 'Starte ich eine weitere Claude-Session in einem anderen Terminal.', scores: { sprintCaptain: 3 } },
        { text: 'Schaue ich dem Output zu und reviewe mental mit.', scores: { secondOpinion: 3 } },
        { text: 'Arbeite ich an etwas komplett anderem.', scores: { batchBuilder: 3 } },
        { text: 'Scrolle ich durch Social Media. Ehrlich gesagt.', scores: { windowStarter: 3 } },
      ]},
    ],
  },
};

// Shared structural data (same for all languages)
const TYPE_ORDER = [
  'windowStarter', 'batchBuilder', 'promptPerfectionist', 'secondOpinion',
  'autoAccept', 'sprintCaptain', 'guardrailEngineer', 'systemArchitect',
];

const BADGES = {
  en: { contextHoarder: { name: 'Context Hoarder', emoji: '🧠' }, toolHopper: { name: 'Tool Hopper', emoji: '🦘' }, wallCrasher: { name: 'Wall Crasher', emoji: '🧱' }, parallelJuggler: { name: 'Parallel Juggler', emoji: '🧶' } },
  de: { contextHoarder: { name: 'Context-Hamster', emoji: '🧠' }, toolHopper: { name: 'Tool-Hopper', emoji: '🦘' }, wallCrasher: { name: 'Wall-Crasher', emoji: '🧱' }, parallelJuggler: { name: 'Parallel-Jongleur', emoji: '🧶' } },
};

const BADGE_TRIGGERS = {
  context: { 0: 'contextHoarder' },
  rateLimit: { 1: 'toolHopper', 2: 'wallCrasher' },
  whileWaiting: { 0: 'parallelJuggler' },
};

// ═══ STATE ═══
let currentLang = 'en';
let currentQuestion = 0;
let answers = [];

function L() { return LOCALES[currentLang]; }

// ═══ DOM HELPERS ═══
const $ = (sel) => document.querySelector(sel);
const show = (id) => {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
};

// ═══ LANGUAGE ═══
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyUIStrings();
}

function applyUIStrings() {
  const ui = L().ui;
  $('.subtitle').textContent = ui.quizSubtitle;
  $('.meta').textContent = ui.questionCount;
  $('.disclaimer').textContent = ui.disclaimer;
  $('#start-btn').textContent = ui.startQuiz;
  $('.analyzing-content p').textContent = ui.analyzing;
  $('.footer span:last-child').textContent = ui.noData;
}

// ═══ SCORING ═══
function calculateResult(answers) {
  const { questions, types } = L();
  const badges = BADGES[currentLang];
  const scores = {};
  TYPE_ORDER.forEach((id) => (scores[id] = 0));

  const contributions = [];

  answers.forEach(({ questionId, optionIndex }) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;
    const option = question.options[optionIndex];
    if (!option) return;

    Object.entries(option.scores).forEach(([typeId, points]) => {
      scores[typeId] = (scores[typeId] || 0) + points;
      contributions.push({ questionText: question.text, answerText: option.text, typeId, points });
    });
  });

  let winningTypeId = TYPE_ORDER[0];
  let highScore = scores[TYPE_ORDER[0]];
  TYPE_ORDER.forEach((id) => {
    if (scores[id] > highScore) { highScore = scores[id]; winningTypeId = id; }
  });

  const earnedBadges = [];
  const seen = new Set();
  answers.forEach(({ questionId, optionIndex }) => {
    const triggers = BADGE_TRIGGERS[questionId];
    if (triggers && triggers[optionIndex] !== undefined) {
      const badgeId = triggers[optionIndex];
      if (!seen.has(badgeId) && badges[badgeId]) { seen.add(badgeId); earnedBadges.push(badges[badgeId]); }
    }
  });

  const whyBullets = contributions
    .filter((c) => c.typeId === winningTypeId)
    .sort((a, b) => b.points - a.points)
    .slice(0, 3)
    .map((c) => trimText(c.answerText, 70));

  let runnerUpId = null;
  let runnerUpScore = -1;
  TYPE_ORDER.forEach((id) => {
    if (id !== winningTypeId && scores[id] > runnerUpScore) { runnerUpScore = scores[id]; runnerUpId = id; }
  });

  return {
    typeId: winningTypeId,
    type: types[winningTypeId],
    earnedBadges: earnedBadges.slice(0, 3),
    whyBullets,
    runnerUpId,
    runnerUpType: runnerUpId ? types[runnerUpId] : null,
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
  const { questions } = L();
  const ui = L().ui;
  const q = questions[index];
  const total = questions.length;

  $('#progress-text').textContent = `${ui.question} ${index + 1} ${ui.questionOf} ${total}`;
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
  document.querySelectorAll('.option-card').forEach((c) => { c.classList.add('disabled'); });
  card.classList.add('selected');

  answers.push({ questionId, optionIndex });

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion >= L().questions.length) {
      $('#progress-fill').style.width = '100%';
      showAnalyzing();
    } else {
      const quizContainer = $('.quiz-container');
      quizContainer.classList.add('transitioning');

      setTimeout(() => {
        renderQuestion(currentQuestion);
        updateBackButton();
        quizContainer.classList.remove('transitioning');
        quizContainer.classList.add('entering');
        requestAnimationFrame(() => { requestAnimationFrame(() => { quizContainer.classList.remove('entering'); }); });
      }, 250);
    }
  }, 350);
}

function showAnalyzing() {
  const ui = L().ui;
  $('.analyzing-content p').textContent = ui.analyzing;
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
  const ui = L().ui;

  $('.result-label').textContent = ui.youAre;
  $('#result-emoji').textContent = type.emoji;
  $('#result-name').textContent = type.name.toUpperCase();

  const displayOneLiner = type.oneLiner.startsWith('"') ? type.oneLiner : `"${type.oneLiner}"`;
  $('#result-oneliner').textContent = displayOneLiner;

  // Labels
  $('.detail-row:nth-child(1) strong').textContent = ui.superpower;
  $('.detail-row:nth-child(2) strong').textContent = ui.bossFight;
  $('.detail-row:nth-child(3) strong').textContent = ui.fix;

  $('#result-superpower').textContent = type.superpower;
  $('#result-bossfight').textContent = type.bossFight;
  $('#result-fix').textContent = type.fix;

  if (earnedBadges.length > 0) {
    $('#badges-section').style.display = '';
    $('.badges-label').textContent = `🏷️ ${ui.badges}`;
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

  if (runnerUpType) {
    $('#runner-up').style.display = '';
    $('#runner-up-text').textContent = `${runnerUpType.emoji} ${runnerUpType.name}`;
    $('#runner-up p').firstChild.textContent = `${ui.runnerUp}: `;
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
  $('.why-section h3').textContent = ui.whyThisType;
  $('.reflection').textContent = ui.reflection;

  // Snippet section
  $('.snippet-section h3').textContent = ui.linkedinSectionTitle;
  $('#snippet-text').textContent = generateSnippet(result);
  $('#copy-btn').textContent = ui.copyToClipboard;
  $('.btn-linkedin').textContent = ui.shareOnLinkedIn;
  $('.btn-secondary').textContent = ui.retakeQuiz;
}

function generateSnippet(result) {
  const { type, earnedBadges } = result;
  const ui = L().ui;

  const displayOneLiner = type.oneLiner.startsWith('"') ? type.oneLiner : `"${type.oneLiner}"`;
  const typeName = (type.name.startsWith('The ') || type.name.startsWith('Der ')) ? type.name : `a ${type.name}`;

  let s = `${ui.linkedinIntro}\n\n`;
  s += `${ui.linkedinIm} ${typeName} — ${displayOneLiner}\n\n`;
  s += `💪 ${ui.superpower}: ${type.superpower}\n`;
  s += `🐉 ${ui.bossFight}: ${type.bossFight}\n`;
  s += `🛠️ ${ui.fix}: ${type.fix}\n`;

  if (earnedBadges.length > 0) {
    s += `🏷️ ${earnedBadges.map((b) => `${b.emoji} ${b.name}`).join(' · ')}\n`;
  }

  s += `\n${ui.linkedinCta}\n`;
  s += `→ janrummel.github.io/claude-code-o-mat\n\n`;
  s += `#ClaudeCode #ClaudeCodeOmat #CodingWithAI`;

  return s;
}

// ═══ ACTIONS ═══
function copySnippet() {
  const text = $('#snippet-text').textContent;
  const ui = L().ui;
  navigator.clipboard.writeText(text).then(() => {
    const btn = $('#copy-btn');
    btn.textContent = ui.copied;
    btn.style.background = 'var(--green)';
    setTimeout(() => {
      btn.textContent = ui.copyToClipboard;
      btn.style.background = '';
    }, 2000);
  });
}

function shareOnLinkedIn() {
  const url = encodeURIComponent('https://janrummel.github.io/claude-code-o-mat');
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener');
}

function retakeQuiz() {
  currentQuestion = 0;
  answers = [];
  show('landing');
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
  const ui = L().ui;
  if (btn) {
    btn.style.display = currentQuestion > 0 ? '' : 'none';
    btn.textContent = ui.back;
  }
}
