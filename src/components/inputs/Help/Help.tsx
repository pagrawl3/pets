import React from "react";
import clsx from "clsx";
import styles from "./Help.module.scss";

const Help = ({
  className,
  children,
  isError,
}: Readonly<{
  className?: string;
  children?: React.ReactNode;
  isError?: boolean;
}>) => {
  if (!children) return null;
  return (
    <div
      className={clsx(styles.help, { [styles.isError]: isError }, className)}
    >
      {children}
    </div>
  );
};

export default React.memo(Help);
