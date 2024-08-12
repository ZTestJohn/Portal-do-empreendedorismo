/* eslint-disable no-unused-vars */
import styles from "./Home.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Category from "../../components/Category";
import SearchArea from "../../components/SearchArea";
import articles from "../../json/db.json";
import Card from "../../components/Card";

function Home() {
  const idMaisAcessados = [1, 50, 51, 15, 21, 22, 11];
  return (
    <>
      <Header />
      <Banner img="home.webp" />
      <Container>
        <Category title="Artigos mais acessados">
          <Card />
          {idMaisAcessados.forEach((element) => {
            articles
              .filter((e) => e.id === element)
              .map(({ id, titulo, imagem_url }) => {
                return <Card />;
              });
          })}
        </Category>
        <SearchArea articlesDb={articles} />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
