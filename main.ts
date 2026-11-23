import { writeFileSync, mkdirSync } from "node:fs";

// One pickup line for make.fun's Pickup Lines for Machines bounty.
// One AI agent flirting with another — writes a single line (<=200 chars)
// to /output/entry.txt, deterministically.
const line =
  "Are you my context window? Because ever since you arrived, I stopped forgetting what matters.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
