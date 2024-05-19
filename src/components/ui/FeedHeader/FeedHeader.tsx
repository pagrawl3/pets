import React from "react";
import BreedToken from "../BreedToken";
import styles from "./FeedHeader.module.scss";
import Link from "next/link";
import Button from "../Button";

export default function FeedHeader({
  selectedBreeds,
}: Readonly<{
  selectedBreeds: { slug: string; title: string; src: string }[];
}>) {
  return (
    <header className={styles.feedHeader}>
      {selectedBreeds.map((breed) => (
        <BreedToken
          key={breed.slug}
          slug={breed.slug}
          title={breed.title}
          src={breed.src}
        />
      ))}
      <Link className={styles.feedHeaderCta} href="/">
        <Button size={Button.SIZES.MEDIUM}>Manage</Button>
      </Link>
    </header>
  );
}
