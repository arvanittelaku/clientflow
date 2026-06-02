import { readFileSync } from "fs";
import path from "path";

let cachedKnowledge: string | null = null;

export function getKnowledgeBase(): string {
  if (cachedKnowledge) {
    return cachedKnowledge;
  }

  const filePath = path.join(
    process.cwd(),
    "knowledge",
    "clientflow-knowledge.md",
  );

  cachedKnowledge = readFileSync(filePath, "utf-8");
  return cachedKnowledge;
}
