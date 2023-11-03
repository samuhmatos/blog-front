import fs from "fs/promises";
async function read<TR = any>(path: string): Promise<TR> {
  const fileContent = await fs.readFile(path, "utf-8");
  return JSON.parse(fileContent);
}

async function write(path: string, content: any) {
  await fs.writeFile(path, JSON.stringify(content, null, 2), "utf-8");
}

export const fsUtils = {
  read,
  write,
};
