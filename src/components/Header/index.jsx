import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  let menuState = true;
  function menuFunction() {
    let menuButton = document.getElementById("menuButton");
    menuButton.style.transition = "all 0.5s ease-out";
    if (menuState) {
      menuState = false;
      menuButton.style.transform = "rotateZ(-90deg)";
    } else {
      menuState = true;
      menuButton.style.transform = "rotateZ(0)";
      return menuState;
    }
  }
  return (
    <>
      <header className={styles.header}>
        <div>
          <button id="menuButton" onClick={menuFunction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
          <Link to="/">
            <span>Portal do empreendedorismo</span>
          </Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Article">Artigo</Link>
        </nav>
      </header>
    </>
  );
}
export default Header;
