import styles from "./Article.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ArticleStructure from "../../components/ArticleStructure";
import { useParams } from "react-router-dom";
import articleInformation from "./articleInformation";
import NotFound from "../NotFound";

function Article() {
  const params = useParams()
  const result = articleInformation(params.id)
  if(!result) { return <NotFound /> }

  return (
    <>
      <Header />
      <Container>
        <h1 id={styles.fisrtTitle}>{result.titulo}</h1>
        <article className={styles.article}>
          <div className={styles.articleContent}>
            <ArticleStructure>
              
            </ArticleStructure>
          </div>
          <aside className={styles.UserInfoAndComments}></aside>
        </article>
      </Container>
      <Footer />
    </>
  );
}
export default Article;
