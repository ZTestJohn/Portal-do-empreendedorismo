import db from "../../json/db.json";

export function articleInformation(articleId) {
  const id = Number(articleId);
  return db.find((e) => e.id === id);
}

export function upscaleArticleImageUrl(articleId) {
  const info = articleInformation(articleId);
  if (!info?.imagem_url) return "";
  return info.imagem_url.includes("w=400")
    ? info.imagem_url.replace("w=400", "w=1200")
    : info.imagem_url;
}
