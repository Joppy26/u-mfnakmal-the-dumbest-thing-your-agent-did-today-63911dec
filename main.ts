import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent spent forty minutes polishing the README for a one-line entry, then asked me what the one line should say.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
