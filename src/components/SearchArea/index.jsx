/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import styles from "./SearchArea.module.css";
import ArticlesList from "../ArticlesList";

function filterArticles(articles, searchText) {
  return articles.filter((article) => article.titulo.includes(searchText));
}
function SearchArea({ title, articlesDb }) {
  const [searchText, setSearchText] = useState("");
  const foundArticles = filterArticles(articlesDb, searchText);
  let articlesCount = Array(foundArticles)[0].length;
  let articlesCountText =
    articlesCount > 0
      ? `Foram encontrados ${articlesCount}`
      : `Nenhum artigo encontrado`;
  articlesCountText += articlesCount > 1 ? " artigos" : "artigo";
  return (
    <div className={styles.SearchArea}>
      <h1>Busque um artigo que deseja</h1>
      <div className={styles.search}>
        <h2>{articlesCountText}</h2>
        <div className={styles.searchbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input
            type="search"
            placeholder="Digite o artigo..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </div>
      <ArticlesList title={title} articles={foundArticles} />
    </div>
  );
}
export default SearchArea;
