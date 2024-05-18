import React from "react";
import Card from "../Card";
import styles from "./BreedCard.module.scss";
import LoadingIcon from "@/icons/loading.svg";
import TickIcon from "@/icons/tick.svg";
import clsx from "clsx";
import useGetDogImage from "@/hooks/useGetDogImage";

export default function BreedCard({
  slug,
  title,
  onClick,
  selected,
}: Readonly<{
  slug: string;
  title: string;
  onClick: (breed: { slug: string; src: string; title: string }) => void;
  selected: boolean;
}>) {
  const { src, loading, onLoad } = useGetDogImage({ slug });

  return (
    <Card
      tabIndex={0}
      onClick={() => onClick({ slug, src, title })}
      onKeyUp={(e) => e.key === "Enter" && onClick({ slug, src, title })}
      className={clsx(styles.breedCard, { [styles.selected]: selected })}
    >
      {src ? (
        <figure className={styles.breedCardImage}>
          <img src={src} alt={slug} onLoad={onLoad} />
          <div
            className={clsx(styles.breedCardImageLoading, {
              [styles.active]: loading,
            })}
          >
            <LoadingIcon />
          </div>
        </figure>
      ) : null}
      <span>
        <div className={styles.breedCardRadio}>
          <TickIcon />
        </div>
        {title}
      </span>
    </Card>
  );
}
