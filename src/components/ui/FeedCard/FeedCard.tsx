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
  likes,
  onLike,
}: Readonly<{
  slug: string;
  query: number;
  likes: string[];
  onLike: (url: string, isLike: boolean) => void;
}>) {
  const { src, loading, onLoad } = useGetDogImage({ slug, query });
  const srcId = src.split("/").slice(-2).join("/");
  return (
    <FeedCard
      slug={slug}
      src={src}
      loading={loading}
      onLoad={onLoad}
      liked={likes.includes(srcId)}
      onLike={onLike}
    />
  );
}

function FeedCard({
  slug,
  src,
  loading,
  onLoad,
  onLike,
  liked,
}: Readonly<{
  slug: string;
  src: string;
  loading: boolean;
  onLoad: () => void;
  onLike: (url: string, isLike: boolean) => void;
  liked: boolean;
}>) {
  const [optimisticLiked, setOptimisticLiked] = React.useState(liked);
  const handleLike = React.useCallback(() => {
    setOptimisticLiked((prev: boolean) => !prev);
    onLike(src, !optimisticLiked);
  }, [onLike, optimisticLiked, src]);

  React.useEffect(() => {
    setOptimisticLiked(liked);
  }, [liked, src]);

  return (
    <Card className={styles.feedCard} onClick={handleLike}>
      <figure className={styles.feedCardImage}>
        <img src={src} alt={slug} onLoad={onLoad} />
        <div
          className={clsx(styles.feedCardImageLoading, {
            [styles.active]: loading,
          })}
        >
          <LoadingIcon />
        </div>
      </figure>
      <div className={styles.feedCardInfo}>
        <span>{slug}</span>
        <div className={styles.feedCardCtas}>
          <HeartIcon
            className={clsx(styles.feedCardCta, styles.like, {
              [styles.liked]: optimisticLiked,
            })}
          />
        </div>
      </div>
    </Card>
  );
}
