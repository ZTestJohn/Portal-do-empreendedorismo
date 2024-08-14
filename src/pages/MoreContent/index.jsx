import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./MoreContent.module.css";

function MoreContent() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.MoreContent}></section>
      </Container>
      <Footer />
    </>
  );
}

export default MoreContent;
