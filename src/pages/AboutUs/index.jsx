import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.AboutUS}>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;

