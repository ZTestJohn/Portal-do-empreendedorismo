/* eslint-disable react/prop-types */
import styles from "./QuestionText.module.css";

function QuestionText({ title, children }) {
  return (
    <section className={styles.QuestionText}>
      <h1>{title}</h1>
      <div>
          {children}
      </div>
    </section>
  );
}
export default QuestionText;
