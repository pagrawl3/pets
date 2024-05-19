"use client";

import React from "react";
import clsx from "clsx";
import Card from "@/components/ui/Card";
import HeartIcon from "@/icons/heart.svg";
import LoadingIcon from "@/icons/loading.svg";
import useGetDogImage from "@/hooks/useGetDogImage";
import styles from "./FeedCard.module.scss";

export default function FeedCardContainer({
  slug,
  query,
}: Readonly<{
  slug: string;
  query: number;
}>) {
  const { src, loading, onLoad } = useGetDogImage({ slug, query });
  return <FeedCard slug={slug} src={src} loading={loading} onLoad={onLoad} />;
}

function FeedCard({
  slug,
  src,
  loading,
  onLoad,
}: Readonly<{
  slug: string;
  src: string;
  loading: boolean;
  onLoad: () => void;
}>) {
  return (
    <Card className={styles.feedCard}>
      <div className={styles.feedCardImage}>
        <img src={src} alt={slug} onLoad={onLoad} />
        <div
          className={clsx(styles.feedCardImageLoading, {
            [styles.active]: loading,
          })}
        >
          <LoadingIcon />
        </div>
      </div>
      <div className={styles.feedCardInfo}>
        <span>{slug}</span>
        <div className={styles.feedCardCtas}>
          <HeartIcon
            src={HeartIcon}
            className={clsx(styles.feedCardCta, styles.like)}
          />
        </div>
      </div>
    </Card>
  );
}
