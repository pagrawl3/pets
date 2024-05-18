import React from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";

export default function Card({
  children,
  className,
  onClick,
  onKeyUp,
  tabIndex,
}: Readonly<{
  tabIndex?: number;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}>) {
  return (
    <section
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyUp={onKeyUp}
      className={clsx(styles.card, className)}
    >
      {children}
    </section>
  );
}
