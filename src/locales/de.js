// German locale — gleiche Scores wie en.js, deutscher Text

export const locale = {
  code: 'de',

  ui: {
    langName: 'Deutsch',
    quizSubtitle: 'Welcher Claude Code Coding-Typ bist du?',
    questionCount: '10 Fragen \u00B7 ~90 Sek \u00B7 keine Daten gesammelt',
    disclaimer: 'Kein psychologischer Test. Nur ein spielerisches Selbstreflexions-Spiel.',
    startQuiz: 'Quiz starten',
    analyzing: 'Analysiere deine Coding-Patterns...',
    questionOf: 'von',
    question: 'Frage',
    yourResult: 'Dein Ergebnis',
    youAre: 'Du bist',
    superpower: 'Superpower',
    bossFight: 'Boss-Fight',
    fix: 'Fix',
    badges: 'Badges',
    runnerUp: 'Runner-up',
    whyThisType: 'Warum dieser Typ?',
    reflection:
      '\u{1F331} Das ist eine spielerische Selbstreflexion, keine Diagnose. Muster k\u00F6nnen sich \u00E4ndern \u2014 und sie zu bemerken ist der erste Schritt, sie bewusst zu w\u00E4hlen.',
    shareOnLinkedIn: 'Auf LinkedIn teilen',
    copyToClipboard: 'In die Zwischenablage',
    copied: '\u2713 Kopiert!',
    retakeQuiz: '\u21BB Quiz wiederholen',
    back: '\u2190 Zur\u00FCck',
    linkedinSnippetTitle: '\u{1F4CB} Dein LinkedIn-Snippet (kopieren & einf\u00FCgen):',
    linkedinIntro: '\u{1F916} Ich habe gerade das Claude Code-o-mat Quiz gemacht!',
    linkedinIm: 'Ich bin',
    linkedinCta: 'Was ist DEIN Claude Code Typ? Probiers aus:',
    thanks: 'Danke f\u00FCrs Mitspielen! \u{1F389}',
    ctrlC: '\u{1F44B} Kein Problem! Du bist wahrscheinlich eh ein Window-Starter.',
    noData: 'Keine Daten gesammelt. Nie.',
  },

  types: {
    windowStarter: {
      name: 'Der Window-Starter',
      emoji: '\u{1FA9F}',
      oneLiner: '"Nur eine kurze Frage..." \u2192 4 Stunden sp\u00E4ter',
      superpower:
        'Schnelle Erkundung und Iteration. Du findest L\u00F6sungen, die andere \u00FCbersehen, weil du das Problem immer wieder von neuen Seiten angehst.',
      bossFight: 'Session-Fragmentierung \u2014 50 kleine Chats, null koh\u00E4renter Fortschritt.',
      fix: '\u{1F6A7} Session Gate \u2014 bevor du Claude \u00F6ffnest, schreib dein Ziel in EINEM Satz. Wenn du das nicht kannst, bist du noch nicht bereit.',
    },
    batchBuilder: {
      name: 'Der Batch-Builder',
      emoji: '\u{1F4E6}',
      oneLiner: 'Sammelt Tasks wie Pok\u00e9mon, deployed dann in einem fokussierten Sprint',
      superpower:
        'Tiefe, fokussierte Sessions mit echten Ergebnissen. Deine Batches sind legend\u00E4r \u2014 ein Anlauf, f\u00FCnf Features shipped.',
      bossFight: '\u00DCber-Batching \u2014 deine Queue w\u00E4chst schneller als du sie abarbeitest.',
      fix: '\u{1F3AF} 2-Task-Regel \u2014 wenn dein Batch mehr als 5 Punkte hat, teil ihn in zwei Sessions. Shipped > planned.',
    },
    promptPerfectionist: {
      name: 'Der Prompt-Perfektionist',
      emoji: '\u{1F48E}',
      oneLiner: 'Glaubt, dass der perfekte Prompt existiert. Wird ihn finden.',
      superpower:
        'Konstant hochwertige Ergebnisse, weil deine Anweisungen null Raum f\u00FCr Fehlinterpretation lassen. Deine CLAUDE.md ist ein Kunstwerk.',
      bossFight: 'Prompt-Paralyse \u2014 20 Minuten formulieren, 2 Minuten coden.',
      fix: '\u23F1\uFE0F Good-Enough-Gate \u2014 stell dir einen 3-Minuten-Timer pro Prompt. Wenn er klingelt: abschicken.',
    },
    secondOpinion: {
      name: 'Der Zweitgutachter',
      emoji: '\u{1F50D}',
      oneLiner: '"Sieht richtig aus... aber kannst du nochmal pr\u00FCfen?"',
      superpower:
        'Du f\u00E4ngst Bugs und Halluzinationen, die andere \u00FCbersehen. Deine Verification-Loops sind nervig \u2014 und retten die Produktion.',
      bossFight:
        'Validierungs-Spiralen, die jedes Momentum t\u00F6ten \u2014 drei Runden "bist du sicher?" vor einem Einzeiler.',
      fix: '\u2705 Trust Threshold \u2014 wenn zwei unabh\u00E4ngige Checks \u00FCbereinstimmen: shippen. Keine dritte Meinung n\u00F6tig.',
    },
    autoAccept: {
      name: 'Der Auto-Accept-Zocker',
      emoji: '\u{1F3B0}',
      oneLiner: 'Liest Diffs wie AGBs \u2014 scrollen, scrollen, akzeptieren',
      superpower:
        'Irrer Durchsatz, wenn die KI gut drauf ist. Du shippst vor dem Mittag mehr als die meisten am ganzen Tag.',
      bossFight: 'Der eine Diff, den du nicht gelesen hast und der deine Auth-Middleware gel\u00F6scht hat.',
      fix: '\u{1F3B2} Diff-Roulette \u2014 lies mindestens jeden dritten Diff komplett. Dein zuk\u00FCnftiges Ich wird es dir danken.',
    },
    sprintCaptain: {
      name: 'Der Sprint-Captain',
      emoji: '\u26A1',
      oneLiner: 'Shipped Features als w\u00E4re jeder Tag ein Hackathon',
      superpower:
        'Pures Momentum. Wenn du im Flow bist, materialisieren sich Features schneller als PMs Tickets schreiben k\u00F6nnen.',
      bossFight: 'Tech Debt, die sich hinter dem Sprint aufstapelt wie Geschirr nach einer Party.',
      fix: '\u{1F9CA} Cooldown-Runde \u2014 nach jedem 3. Feature eine Session f\u00FCr Aufr\u00E4umarbeiten. Future-You ist auch ein Stakeholder.',
    },
    guardrailEngineer: {
      name: 'Der Guardrail-Engineer',
      emoji: '\u{1F6E1}\uFE0F',
      oneLiner: 'Schnell unterwegs, aber immer mit Sicherheitsnetz',
      superpower:
        'Speed UND Zuverl\u00E4ssigkeit \u2014 das Einhorn-Kombo. Deine Tests fangen, was deine Augen \u00FCbersehen, und deine CI l\u00FCgt nie.',
      bossFight:
        'Over-Engineering von Sicherheit f\u00FCr triviale \u00C4nderungen \u2014 50 Zeilen Tests f\u00FCr einen Farbwechsel.',
      fix: '\u{1F4E1} Risk Radar \u2014 pass die Review-Tiefe dem \u00C4nderungs-Risiko an. Ein Typo-Fix \u2260 ein Auth-Refactor.',
    },
    systemArchitect: {
      name: 'Der System-Architekt',
      emoji: '\u{1F3D7}\uFE0F',
      oneLiner: 'Denkt in Interfaces und Modulen bevor eine einzige Zeile geschrieben wird',
      superpower:
        'Code, der wie guter Wein altert \u2014 erweiterbar, sauber, robust. Sechs Monate sp\u00E4ter ergibt er immer noch Sinn.',
      bossFight:
        'Analyse-Paralyse \u2014 die perfekte Architektur existiert nur in deinem Kopf w\u00E4hrend die Deadline vorbeirauscht.',
      fix: '\u{1F528} Prototype First \u2014 bau eine grobe, funktionierende Version bevor du optimierst. H\u00E4sslicher Code der l\u00E4uft schl\u00E4gt sch\u00F6nen Code der nicht l\u00E4uft.',
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
    contextHoarder: { name: 'Context-Hamster', emoji: '\u{1F9E0}' },
    toolHopper: { name: 'Tool-Hopper', emoji: '\u{1F998}' },
    wallCrasher: { name: 'Wall-Crasher', emoji: '\u{1F9F1}' },
    parallelJuggler: { name: 'Parallel-Jongleur', emoji: '\u{1F9F6}' },
  },

  badgeTriggers: {
    context: { 0: 'contextHoarder' },
    rateLimit: { 1: 'toolHopper', 2: 'wallCrasher' },
    whileWaiting: { 0: 'parallelJuggler' },
  },

  questions: [
    {
      id: 'sessionStart',
      text: 'Wie beginnt eine typische Claude Code Session bei dir?',
      options: [
        { text: '"Hey Claude, kurze Frage..." (das sagst du 12 Mal am Tag)', scores: { windowStarter: 3 } },
        { text: 'Ich sammle im Kopf 5+ Tasks, dann setze ich mich f\u00FCr eine richtige Session hin', scores: { batchBuilder: 3 } },
        { text: 'Ich formuliere einen detaillierten Prompt mit Constraints, Beispielen und Kontext', scores: { promptPerfectionist: 3 } },
        { text: 'Ich \u00F6ffne das Terminal und tippe los \u2014 die Inspiration kommt beim Schreiben', scores: { sprintCaptain: 2, autoAccept: 1 } },
      ],
    },
    {
      id: 'eightyPercent',
      text: 'Dein Feature ist zu ~80% fertig. Wie geht es weiter?',
      options: [
        { text: 'Shippen. Sp\u00E4ter iterieren. Done is better than perfect.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Tests f\u00FCr die restlichen Edge Cases schreiben, dann erst mergen', scores: { guardrailEngineer: 3 } },
        { text: 'Claude bitten, die eigene Arbeit zu reviewen und m\u00F6gliche Probleme zu erkl\u00E4ren', scores: { secondOpinion: 3 } },
        { text: 'Innehalten und das Interface-Design nochmal \u00FCberdenken', scores: { systemArchitect: 3 } },
      ],
    },
    {
      id: 'codeChanges',
      text: 'Claude schl\u00E4gt mehrere Code-\u00C4nderungen vor. Du...',
      options: [
        { text: 'Akzeptierst alles. Das Leben ist zu kurz f\u00FCr jeden Diff.', scores: { autoAccept: 3 } },
        { text: 'Liest jede einzelne Zeile. Manchmal schreibst du Teile von Hand um.', scores: { promptPerfectionist: 3 } },
        { text: 'L\u00E4sst die Tests laufen \u2014 wenn sie gr\u00FCn sind, wird deployed.', scores: { guardrailEngineer: 3 } },
        { text: 'Fragst mindestens einmal: "Bist du sicher bei diesem Ansatz?"', scores: { secondOpinion: 3 } },
      ],
    },
    {
      id: 'claudeMd',
      text: 'Deine CLAUDE.md Datei ist...',
      options: [
        { text: 'Meine was?', scores: { windowStarter: 3 } },
        { text: 'Ein Meisterwerk. Constraints, Konventionen, Beispiele \u2014 alles kuratiert.', scores: { promptPerfectionist: 3 } },
        { text: 'Praktisch \u2014 Projektstruktur, wichtige Regeln, Test-Commands.', scores: { batchBuilder: 2, guardrailEngineer: 1 } },
        { text: 'Ein lebendes Dokument \u2014 ich aktualisiere es mitten in der Session.', scores: { systemArchitect: 2, sprintCaptain: 1 } },
      ],
    },
    {
      id: 'context',
      text: 'Wenn es darum geht, Claude Kontext zu geben...',
      options: [
        { text: 'Die komplette README + Dateibaum einf\u00FCgen. Kontext ist King.', scores: { windowStarter: 3 } },
        { text: 'Minimal halten. Claude soll sich das selbst erschlie\u00DFen.', scores: { autoAccept: 3 } },
        { text: 'Pro Task sorgf\u00E4ltig kuratieren \u2014 nur relevante Dateien.', scores: { systemArchitect: 2, promptPerfectionist: 1 } },
        { text: 'Die Konversation nat\u00FCrlich wachsen lassen. Kontext baut sich auf.', scores: { windowStarter: 2, batchBuilder: 1 } },
      ],
    },
    {
      id: 'uncertainty',
      text: 'Claude gibt eine Antwort, bei der du dir nicht 100% sicher bist. Du...',
      options: [
        { text: '"Kannst du deine Argumentation Schritt f\u00FCr Schritt erkl\u00E4ren?"', scores: { secondOpinion: 3 } },
        { text: 'Googelst es zur Gegenprobe.', scores: { secondOpinion: 2, guardrailEngineer: 1 } },
        { text: 'Vertraust dem Bauchgef\u00FChl und machst weiter.', scores: { autoAccept: 3 } },
        { text: 'Schreibst einen Test, um das Verhalten empirisch zu pr\u00FCfen.', scores: { guardrailEngineer: 3 } },
      ],
    },
    {
      id: 'rateLimit',
      text: 'Du erreichst das Rate Limit. Deine spontane Reaktion?',
      options: [
        { text: 'Endlich die Pause machen, die l\u00E4ngst f\u00E4llig war.', scores: { batchBuilder: 3 } },
        { text: 'Sofort zu ChatGPT / Gemini / Copilot wechseln.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Frustriert \u2014 ich war IM FLOW!', scores: { sprintCaptain: 3 } },
        { text: 'Den bisherigen Output von Claude in Ruhe durchgehen.', scores: { systemArchitect: 2, guardrailEngineer: 1 } },
      ],
    },
    {
      id: 'definitionOfDone',
      text: 'Eine Aufgabe ist "fertig" wenn...',
      options: [
        { text: 'Es funktioniert. Ship it.', scores: { sprintCaptain: 2, autoAccept: 1 } },
        { text: 'Tests gr\u00FCn UND Code sauber UND PR-Beschreibung geschrieben.', scores: { guardrailEngineer: 3 } },
        { text: 'Ich es mindestens zweimal unabh\u00E4ngig verifiziert habe.', scores: { secondOpinion: 3 } },
        { text: 'Es zur Architektur-Vision passt und Edge Cases elegant handelt.', scores: { systemArchitect: 3 } },
      ],
    },
    {
      id: 'newProject',
      text: 'Du startest ein komplett neues Projekt. Dein erster Schritt?',
      options: [
        { text: 'Einfach loslegen. Struktur ergibt sich von selbst.', scores: { sprintCaptain: 2, windowStarter: 1 } },
        { text: 'Test-Framework, CI-Pipeline und Linter aufsetzen.', scores: { guardrailEngineer: 3 } },
        { text: 'Die Architektur designen \u2014 Interfaces, Module, Datenfluss.', scores: { systemArchitect: 3 } },
        { text: 'Einen detaillierten Project-Brief / CLAUDE.md f\u00FCr Claude schreiben.', scores: { promptPerfectionist: 2, batchBuilder: 1 } },
      ],
    },
    {
      id: 'whileWaiting',
      text: 'W\u00E4hrend Claude an einer komplexen Aufgabe arbeitet...',
      options: [
        { text: 'Starte ich eine weitere Claude-Session in einem anderen Terminal.', scores: { sprintCaptain: 3 } },
        { text: 'Schaue ich dem Output zu und reviewe mental mit.', scores: { secondOpinion: 3 } },
        { text: 'Arbeite ich an etwas komplett anderem.', scores: { batchBuilder: 3 } },
        { text: 'Scrolle ich durch Social Media. Ehrlich gesagt.', scores: { windowStarter: 3 } },
      ],
    },
  ],
};
