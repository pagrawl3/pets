import React from "react";
import styles from "./Card.module.scss";

export default function Card({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section className={styles.card}>{children}</section>;
}
