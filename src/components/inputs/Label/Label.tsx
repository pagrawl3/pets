import React from "react";
import clsx from "clsx";
import styles from "./Label.module.scss";

const Label = ({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) => {
  if (!children) return null;
  return (
    <label className={clsx(styles.label, className)}>
      <span>{children}</span>
    </label>
  );
};

export default React.memo(Label);
