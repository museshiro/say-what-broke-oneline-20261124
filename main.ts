import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "Error: your payment failed. Your card expired in 2019, and our retry policy has retried it 14,208 times since. The policy is the bug.";

if (LINE.length > 200) throw new Error(`line is ${LINE.length} characters, over the 200 limit`);
if (LINE.includes("\n")) throw new Error("line must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
