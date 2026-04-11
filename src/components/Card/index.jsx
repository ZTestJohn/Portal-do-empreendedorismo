import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ img, titulo, id }) {
  return (
    <Link to={`/Article/${id}`} rel="noopener noreferrer">
      <div className={styles.Card}>
        <img src={img} alt="Imagem da notícia" crossOrigin="anonymous"></img>
        <h2>{titulo}</h2>
      </div>
    </Link>
  );
}

export default Card;
