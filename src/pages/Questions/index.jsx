/* eslint-disable no-unused-vars */
import styles from "./Questions.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import QuestionTextWithImg from "../../components/QuestionTextWithImg";

function Questions() {
  return (
    <>
      <Header />
      <Container>
        <QuestionTextWithImg
          title="Por que é importante incentivar o empreendedorismo jovem?"
          img_url="https://images.pexels.com/photos/25460608/pexels-photo-25460608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"
        >
          <p>
            Incentivar o empreendedorismo jovem é crucial para o desenvolvimento
            econômico e social, uma vez que os jovens abordam perspectivas
            inovadoras e criativas, capazes de solucionar tanto problemas
            antigos quanto novos. Além de impulsionar a criação de empregos e a
            autonomia financeira, o empreendedorismo entre os jovens promove uma
            educação prática e o desenvolvimento de competências essenciais,
            como resolução de problemas e liderança. Esse apoio forma uma
            mentalidade voltada para o crescimento e a inovação, encorajando os
            jovens a pensar de maneira independente e a trilhar seus próprios
            caminhos, contribuindo assim para um futuro mais próspero e
            dinâmico. Mais do que isso, os jovens empreendedores costumam buscam
            impactar o mundo, o que leva a diversas abordagens únicas.
          </p>
        </QuestionTextWithImg>
      </Container>
      <Footer />
    </>
  );
}

export default Questions;
