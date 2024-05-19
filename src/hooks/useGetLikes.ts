import FIREBASE_CONFIG from "@/const/firebaseConfig";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React from "react";

export default function useGetLikes({
  userId,
  url,
}: Readonly<{
  userId: string | null;
  url: string;
}>): string[] {
  const [likes, setLikes] = React.useState([]);
  React.useEffect(() => {
    if (!userId) return;
    const app = initializeApp(FIREBASE_CONFIG);
    const db = getFirestore(app);
    getDoc(doc(db, userId, "likes")).then((docSnap) =>
      docSnap.exists() ? setLikes(docSnap.data().likes) : setLikes([])
    );
  }, [url, userId]);

  return likes;
}
