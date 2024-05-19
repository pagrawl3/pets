import React from "react";
import styles from "./Loader.module.scss";
import LoadingIcon from "@/icons/loading.svg";
import clsx from "clsx";

export default function Loader({}) {
  return (
    <div className={clsx(styles.loader)}>
      <LoadingIcon />
    </div>
  );
}
