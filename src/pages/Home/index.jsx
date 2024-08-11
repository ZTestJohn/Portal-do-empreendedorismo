// import styles from "./Home.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import noticias from "../../json/db.json";
import Category from "../../components/Category";
import db from "../../json/db.json";


function Home() {
  const idMaisAcessados = [1, 50, 51, 15, 21, 22, 11]
  return (
    <>
      <Header />
      <Banner img="home.webp" />
      <Container>
        <Category title="Artigos mais acessados">
          {
           
          }
        </Category>
        <Category title="Todos os artigos">
          {noticias.map(({ imagem_url, titulo, id }) => {
            return (
              <Card
                img={imagem_url}
                titulo={titulo}
                key={id}
                id={id}
              />
            );
          })}
        </Category>
      </Container>
      <Footer />
    </>
  );
}

export default Home;

