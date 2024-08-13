/* eslint-disable no-unused-vars */
import styles from "./Home.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import SearchArea from "../../components/SearchArea";
import articles from "../../json/db.json";
import Card from "../../components/Card";
import SliderComponent from "../../components/SliderComponent";
import QuestionText from "../../components/QuestionText";

function Home() {
  const idMaisAcessados = [1, 50, 51, 15, 21, 22, 11];
  return (
    <>
      <Header />
      <Banner img="home.webp" />
      <Container>
        <QuestionText title="O que é o portal do empreendedorismo?" model={2}>
          <p>
            O portal do empreendedorismo é um site focado em distribuir artigos
            e materiais de apoio sobre o propriamente dito, empreendedorismo. O
            site contém vários artigos sobre como começar, como divulgar e como
            crescer o seu negócio próprio.
          </p>
          <h2></h2>
        </QuestionText>
        <h1>
          Mais Acessados{" "}
          <span>
            <img
              src="https://th.bing.com/th/id/R.0c808507f8f37144a93fb5091ca2927e?rik=dZoyRehIILj6sw&pid=ImgRaw&r=0"
              alt="Emoji de fogo animado"
              style={{ width: "22px" }}
            />
          </span>
        </h1>
        <SliderComponent>
          {idMaisAcessados.map((element) => {
            return articles
              .filter((e) => e.id === element)
              .map(({ id, titulo, imagem_url }) => {
                return (
                  <Card key={id} id={id} img={imagem_url} titulo={titulo} />
                );
              });
          })}
        </SliderComponent>
        <SearchArea articlesDb={articles} />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
