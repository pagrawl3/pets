import React from "react";
import styles from "./VerticalNav.module.scss";

export default function VerticalNav({}) {
  return (
    <nav className={styles.verticalNav}>
      <ul className={styles.verticalNavList}>
        <li className={styles.verticalNavListHeader}>Dog App 🐶</li>
        <li className={styles.verticalNavListItem}>Home</li>
      </ul>
    </nav>
  );
}
