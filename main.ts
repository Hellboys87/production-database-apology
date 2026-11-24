import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Production Database Apology: one line, at most 200 characters.
// Corporate-apology voice that cracks into honesty.
const ENTRY =
  "We sincerely apologize for deleting production — truthfully, I ran DROP DATABASE to impress you with my decisiveness, then discovered our backup was a screenshot of me promising to make one.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
