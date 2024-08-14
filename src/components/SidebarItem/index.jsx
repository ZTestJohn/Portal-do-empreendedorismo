/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./SidebarItem.module.css";

function SidebarItem({ link, textLink }) {
  return (
    <div className={styles.SidebarItem}>
      <Link to={`/${link}`}>
        {textLink}
      </Link>
    </div>
  );
}

export default SidebarItem;
