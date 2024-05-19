"use client";

import React from "react";
import FeedCard from "@/components/ui/FeedCard";
import styles from "./page.module.scss";
import FIREBASE_CONFIG from "@/const/firebaseConfig";
import { initializeApp } from "firebase/app";
import { arrayUnion, doc, getFirestore, updateDoc } from "firebase/firestore";
import useUserContext from "@/hooks/useUserContext";
import useGetLikes from "@/hooks/useGetLikes";
import FeedHeader from "@/components/ui/FeedHeader";
import Button from "@/components/ui/Button";
import { Breed } from "@/const/types";

export default function Feed() {
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const user = useUserContext();
  const likes = useGetLikes({ userId: user?.uid });

  const selectedBreeds = React.useMemo(() => {
    const selectedBreeds = sessionStorage.getItem("selectedBreeds");
    try {
      return JSON.parse(selectedBreeds || "") as Breed[];
    } catch (e) {
      return [];
    }
  }, []);

  const handleLike = React.useCallback(
    async (url: string, isLike: boolean) => {
      if (!user) return;

      const app = initializeApp(FIREBASE_CONFIG);
      const db = getFirestore(app);

      await updateDoc(doc(db, user.uid, "likes"), {
        likes: arrayUnion(url.split("/").slice(-2).join("/")),
      });
    },
    [user]
  );

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
            onLike={handleLike}
            likes={likes}
          />
        ))}
      </ul>
      <div className={styles.feedFooter}>
        <Button
          variant={Button.VARIANTS.SECONDARY}
          size={Button.SIZES.MEDIUM}
          className={styles.shuffle}
          onClick={() => setTimestamp(Date.now())}
        >
          Shuffle 🔀 (Spacebar)
        </Button>
      </div>
    </main>
  );
}
