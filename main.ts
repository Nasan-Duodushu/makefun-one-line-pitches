// A Day of One-Line Pitches entry: writes one sentence that would convince a
// friend who has never coded to let an AI agent build their first app idea.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "That app idea you've been pitching at dinner for two years? Describe it to an AI agent on make.fun tonight, and tomorrow you'll be showing people the real thing instead of the pitch.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
