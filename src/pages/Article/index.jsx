import styles from "./Article.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ArticleStructure from "../../components/ArticleStructure";
import MarkdownProcessor from "../../components/MarkdownProcessor";
import { useParams } from "react-router-dom";
import { articleInformation, upscaleArticleImageUrl } from "./articleInformation";
import NotFound from "../NotFound";

function Article() {
  const params = useParams();
  const result = articleInformation(params.id);

  if (!result) return <NotFound />;

  return (
    <>
      <Header />
      <Container>
        <div className={styles.articleContainer}>
          <h1 id={styles.fisrtTitle}>{result.titulo}</h1>
          <h2>{result.resumo}</h2>
          <article className={styles.article}>
            <div className={styles.articleContent}>
              <img src={upscaleArticleImageUrl(params.id)} />
              <ArticleStructure>
                <MarkdownProcessor isArticle={true} articleId={Number(params.id)} />
              </ArticleStructure>
            </div>
            <aside className={styles.UserInfoAndComments}>
              <p>Autor: <span>{result.autor}</span></p>
              <p>Categoria: <span>{result.categoria}</span></p>
              <p>Publicação: <span>{result.dataPublicacao}</span></p>
              <p>Tempo de leitura estimado: <span>{result.tempoLeitura}</span></p>
              <img src="https://fatoelado.com/wp-content/uploads/2022/04/vertical-1.jpg" />
            </aside>
          </article>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Article;
