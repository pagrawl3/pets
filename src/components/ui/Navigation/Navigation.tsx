import React from "react";
import styles from "./Navigation.module.scss";
import clsx from "clsx";

export default function Navigation({
  steps,
  value,
}: Readonly<{
  steps: string[];
  value: number;
}>) {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationText}>{steps[value]}</div>
      <div className={styles.navigationSteps}>
        {steps.map((_, index) => {
          return (
            <div
              key={index}
              className={clsx(styles.navigationStep, {
                [styles.active]: index <= value,
              })}
            />
          );
        })}
      </div>
    </div>
  );
}
