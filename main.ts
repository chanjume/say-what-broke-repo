import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY = "Save failed: the disk is full of error logs about the disk being full. Delete a few logs and try again.";

if (ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
