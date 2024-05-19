"use client";

import React from "react";
import FeedCard from "@/components/ui/FeedCard";
import FeedHeader from "@/components/ui/FeedHeader";
import Button from "@/components/ui/Button";
import styles from "./page.module.scss";

export default function Feed() {
  const [timestamp, setTimestamp] = React.useState(Date.now());

  const selectedBreeds = React.useMemo(() => {
    const selectedBreeds = sessionStorage.getItem("selectedBreeds");
    try {
      return JSON.parse(selectedBreeds || "");
    } catch (e) {
      return [];
    }
  }, []);

  React.useEffect(() => {
    const refresh = (e: KeyboardEvent) =>
      e.key === " " && setTimestamp(Date.now());
    window.addEventListener("keypress", refresh);
    return () => window.removeEventListener("keypress", refresh);
  }, []);

  return (
    <main className={styles.main}>
      <FeedHeader selectedBreeds={selectedBreeds} />
      <ul className={styles.feedCards}>
        {selectedBreeds.map((breed) => (
          <FeedCard
            key={`${breed.slug}`}
            slug={`${breed.slug}`}
            query={timestamp}
          />
        ))}
      </ul>
      <Button
        variant={Button.VARIANTS.SECONDARY}
        size={Button.SIZES.MEDIUM}
        className={styles.shuffle}
        onClick={() => setTimestamp(Date.now())}
      >
        Shuffle 🔀 (Spacebar)
      </Button>
    </main>
  );
}
