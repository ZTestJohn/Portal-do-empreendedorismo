/// <reference types="vite/client" />

const markdownFiles = import.meta.glob<string>("../../articles/*.md", {
  query: "?raw",
  import: "default",
});

export async function loadMarkdown(x: number) {
  const key = String(x).padStart(2, "0");
  const matchingKey = Object.keys(markdownFiles).find((k) =>
    k.includes(`/${key}-`),
  );

  if (!matchingKey) {
    throw new Error(`Artigo ${key} não encontrado`);
  }

  return markdownFiles[matchingKey as never]();
}
