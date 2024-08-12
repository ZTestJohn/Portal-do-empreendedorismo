/* eslint-disable react/prop-types */
// eslint-disable react/prop-types

import Category from "../Category";
import styles from "./ArticlesList.module.css";
import Card from "../Card";

function ArticlesList({ title, articles }) {
  return (
    <section className={styles.ArticlesList}>
      <Category title={title}>
        {articles.map(({ imagem_url, titulo, id }) => {
          return <Card img={imagem_url}
            titulo={titulo}
            key={id}
            id={id} />;
        })}
      </Category>
    </section>
  );
}
export default ArticlesList;
