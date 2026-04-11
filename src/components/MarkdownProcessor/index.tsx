import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { loadMarkdown } from "./loadMardown";
import styles from "./MarkdownProcessor.module.css";
import Spinner from "../Spinner/Spinner";

type MarkdownProcessorProps =
  | { isArticle: true; articleId: number }
  | { isArticle: false; articleId?: never };

function MarkdownProcessor({ isArticle, articleId }: MarkdownProcessorProps) {
  if (!isArticle) return <h1>Não artigo</h1>;

  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const result = await loadMarkdown(Number(articleId));
        setContent(result);
      } catch {
        setError("Erro ao carregar markdown");
      }
    }
    load();
  }, [articleId]);

  if (error) return <h1>Erro: {error}</h1>;
  if (!content) return <Spinner size="medium" />;

  return (
    <section className={styles.MarkdownProcessorArticle}>
      <Markdown>{content}</Markdown>
    </section>
  );
}

export default MarkdownProcessor;
