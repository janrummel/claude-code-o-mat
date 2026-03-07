# Claude Code-o-mat

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org)
[![Play Online](https://img.shields.io/badge/Play-Online-blue.svg)](https://janrummel.github.io/claude-code-o-mat)

**What Claude Code coding type are you?** A fun 90-second quiz that reveals your coding patterns with AI — available in English and German, with a shareable LinkedIn snippet.

Not a psychological test. Not a diagnosis. Just a playful self-reflection game about how you use Claude Code.

## Play

### Browser (recommended)

**👉 [janrummel.github.io/claude-code-o-mat](https://janrummel.github.io/claude-code-o-mat)** — no install, zero dependencies.

### CLI

```bash
npm install
npm run quiz
```

No accounts, no API keys, no data sent anywhere.

## What You Get

1. **Your main type** (1 of 8) with a meme-worthy one-liner
2. **Superpower** — what makes your pattern effective
3. **Boss fight** — the common pitfall to watch for
4. **Fix** — one concrete micro-intervention
5. **Badges** (0–3) for side-patterns like Night Owl or Context Hoarder
6. **LinkedIn snippet** — ready to copy & paste

## The 8 Types

| Type | One-liner |
|------|-----------|
| The Window Starter | "Just a quick question..." → 4 hours later |
| The Batch Builder | Collects tasks like Pokemon, then deploys in one sprint |
| The Prompt Perfectionist | Believes the perfect prompt exists. Will find it. |
| The Second-Opinion Seeker | "Looks right... but can you double-check?" |
| The Auto-Accept Gambler | Reads diffs like Terms of Service |
| The Sprint Captain | Ships features like every day is a hackathon |
| The Guardrail Engineer | Moves fast, but always with a safety net |
| The System Architect | Thinks in interfaces before writing a single line |

## Example Output

```
  ┌───────────────────────────────────────────┐
  │   🤖  CLAUDE CODE-O-MAT               │
  │   What Claude Code coding type are you? │
  │   10 questions · ~90 sec · zero data sent  │
  └───────────────────────────────────────────┘

  ✔ Analyzing your coding patterns...

╔════════════════════════════════════════════════════════════╗
║          🤖  CLAUDE CODE-O-MAT  🤖                       ║
║                  Your Result                              ║
╠════════════════════════════════════════════════════════════╣
║                                                           ║
║         🛡️  THE GUARDRAIL ENGINEER                       ║
║                                                           ║
║   "Moves fast, but always with a safety net underneath"   ║
║                                                           ║
║ 💪 Superpower:                                            ║
║    Speed AND reliability — the unicorn combo. Your tests  ║
║    catch what your eyes miss, and your CI never lies.     ║
║                                                           ║
║ 🐉 Boss fight:                                            ║
║    Over-engineering safety for trivial changes.           ║
║                                                           ║
║ 🛠️  Fix:                                                  ║
║    📡 Risk Radar — match review depth to change risk.     ║
║    A typo fix ≠ an auth refactor.                         ║
║                                                           ║
║ 🏷️  Badges: 🦉 Night Owl  ·  🧶 Parallel Juggler        ║
║                                                           ║
║ Runner-up: ⚡ The Sprint Captain                          ║
║                                                           ║
╚════════════════════════════════════════════════════════════╝

  Why this type?
  • You answered "Write tests for the remaining edge cases…"
  • You answered "Run the tests — if they're green, it ships."
  • You answered "Set up the test framework, CI pipeline, and linter."

  🌱 This is a playful self-reflection, not a diagnosis. Patterns can
  shift — and noticing them is the first step to choosing them.

  📋 Your LinkedIn snippet (copy & paste):
  ────────────────────────────────────────────────────
  🤖 I just took the Claude Code-o-mat quiz!

  I'm a The Guardrail Engineer — "Moves fast, but always
  with a safety net underneath"

  💪 Superpower: Speed AND reliability — the unicorn combo.
  🐉 Boss fight: Over-engineering safety for trivial changes.
  🛠️ Fix: 📡 Risk Radar — match review depth to change risk.
  🏷️ 🦉 Night Owl · 🧶 Parallel Juggler

  What's YOUR Claude Code type? Try it:
  → janrummel.github.io/claude-code-o-mat

  #ClaudeCode #ClaudeCodeOmat #CodingWithAI
  ────────────────────────────────────────────────────

  Thanks for playing! 🎉
```

## Design Rationale

### Scoring
Each of the 10 questions has 4 answer options. Each option awards 1–3 points to one or two types. The type with the highest total score wins. Ties are broken by definition order. This direct-scoring approach produces coherent results because each answer maps to recognizable behavior patterns.

### Questions
Questions probe 4 behavioral axes without naming them:
- **Rhythm**: Drip (many check-ins) vs. Batch (deep focus blocks)
- **Agency**: Manual control vs. Agent / Auto-Accept
- **Quality**: Ship fast vs. Verify thoroughly
- **Planning**: Improvise vs. Structured

### Badges
Badges trigger on specific answer choices (not cumulative scores), so they capture side-patterns independent of your main type. Max 3 are shown.

### Tone
Lightly funny, never shaming. Every type has genuine strengths. The "Fix" is a concrete micro-intervention, not a lecture.

## Privacy

- Zero data collection
- Zero telemetry
- Zero network requests
- Runs 100% locally

## License

MIT
