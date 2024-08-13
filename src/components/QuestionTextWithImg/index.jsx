/* eslint-disable react/prop-types */
import styles from "./QuestionTextWithImg.module.css";

function QuestionTextWithImg({ title, children, img_url }) {
  return (
    <section className={styles.QuestionTextWithImg}>
      <h1>{title}</h1>
      <article>
        <div className={styles.content}>{children}</div>
        <div className={styles.imgDiv} style={{ backgroundImage: `url(${img_url})` }}></div>
      </article>
    </section>
  );
}
export default QuestionTextWithImg;
