import React from "react";
import BreedToken from "../BreedToken";
import Button from "../Button";
import ChevronRightIcon from "@/icons/chevron-right.svg";
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer({
  selectedBreeds,
  onRemoveSelectedBreed,
}: Readonly<{
  selectedBreeds: { slug: string; title: string; src: string }[];
  onRemoveSelectedBreed: (slug: string) => void;
}>) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLHS}>
        {selectedBreeds.map((breed) => (
          <BreedToken
            key={breed.slug}
            slug={breed.slug}
            title={breed.title}
            src={breed.src}
            onRemove={onRemoveSelectedBreed}
          />
        ))}
        <span className={styles.footerMessage}>
          {selectedBreeds.length === 0 ? (
            <>Select upto 3 breeds to continue</>
          ) : selectedBreeds.length >= 3 ? (
            <>You cannot select more breeds</>
          ) : (
            <>You can select {3 - selectedBreeds.length} more</>
          )}
        </span>
      </div>
      <Link href="/feed">
        <Button
          className={styles.footerRHS}
          variant={Button.VARIANTS.PRIMARY}
          size={Button.SIZES.MEDIUM}
          SuffixIcon={ChevronRightIcon}
        >
          View Feed
        </Button>
      </Link>
    </footer>
  );
}
