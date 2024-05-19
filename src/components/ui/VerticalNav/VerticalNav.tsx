import React from "react";
import Link from "next/link";
import clsx from "clsx";
import HamburgerIcon from "@/icons/hamburger.svg";
import styles from "./VerticalNav.module.scss";

export default function VerticalNav({}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={styles.hamburger}>
        <HamburgerIcon
          className={styles.hamburgerIcon}
          onClick={() => setOpen((t) => !t)}
        />
      </div>
      <div
        onClick={() => setOpen(false)}
        className={clsx(styles.verticalNavOverlay, { [styles.isOpen]: open })}
      />
      <nav className={clsx(styles.verticalNav, { [styles.isOpen]: open })}>
        <ul className={styles.verticalNavList}>
          <li className={styles.verticalNavListHeader}>DOGS! 🐶</li>
          <li className={styles.verticalNavListItem}>Home</li>
          <li className={styles.verticalNavListItemLast}>
            <Link href="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
