/* eslint-disable react/prop-types */
import styles from "./Category.module.css";

function Category({ children, title }) {
    return (
        <section className={styles.Category}>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </section>
    );
}
export default Category;
