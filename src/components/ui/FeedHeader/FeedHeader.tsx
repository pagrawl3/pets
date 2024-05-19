import React from "react";
import BreedToken from "../BreedToken";
import styles from "./FeedHeader.module.scss";
import Link from "next/link";
import Button from "../Button";
import { Breed } from "@/const/types";

export default function FeedHeader({
  selectedBreeds,
}: Readonly<{
  selectedBreeds: Breed[];
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
