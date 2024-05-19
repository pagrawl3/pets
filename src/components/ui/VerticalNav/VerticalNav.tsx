import React from "react";
import styles from "./VerticalNav.module.scss";
import Link from "next/link";

export default function VerticalNav({}) {
  return (
    <nav className={styles.verticalNav}>
      <ul className={styles.verticalNavList}>
        <li className={styles.verticalNavListHeader}>DOGS! 🐶</li>
        <li className={styles.verticalNavListItem}>Home</li>
        <li className={styles.verticalNavListItemLast}>
          <Link href="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
