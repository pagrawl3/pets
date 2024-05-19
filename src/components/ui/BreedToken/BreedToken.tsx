import React from "react";
import CrossIcon from "@/icons/cross.svg";
import Card from "../Card";
import styles from "./BreedToken.module.scss";

export default function BreedToken({
  slug,
  title,
  src,
  onRemove,
}: Readonly<{
  slug: string;
  title: string;
  src?: string;
  onRemove?: (slug: string) => void;
}>) {
  return (
    <Card
      className={styles.breedToken}
      onClick={onRemove ? () => onRemove(slug) : undefined}
    >
      {src ? (
        <figure className={styles.breedTokenImage}>
          <img src={src} alt={slug} />
        </figure>
      ) : null}
      <span>{title}</span>
      {onRemove && <CrossIcon />}
    </Card>
  );
}
