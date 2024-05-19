import React from "react";
import Link from "next/link";
import { Breed } from "@/const/types";
import ChevronRightIcon from "@/icons/chevron-right.svg";
import BreedToken from "../BreedToken";
import Button from "../Button";
import styles from "./Footer.module.scss";

export default function Footer({
  selectedBreeds,
  onRemoveSelectedBreed,
}: Readonly<{
  selectedBreeds: Breed[];
  onRemoveSelectedBreed: (slug: string) => void;
}>) {
  const isSubmitDisabled =
    selectedBreeds.length === 0 || selectedBreeds.length > 3;
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
      <Button
        className={styles.footerRHS}
        variant={Button.VARIANTS.PRIMARY}
        size={Button.SIZES.MEDIUM}
        disabled={isSubmitDisabled}
        SuffixIcon={ChevronRightIcon}
      >
        <Link href={isSubmitDisabled ? "" : "/feed"}>View Feed</Link>
      </Button>
    </footer>
  );
}
