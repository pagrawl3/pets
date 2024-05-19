import FIREBASE_CONFIG from "@/const/firebaseConfig";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React from "react";

export default function useGetLikes({
  userId,
}: Readonly<{ userId?: string | null }>): string[] {
  const [likes, setLikes] = React.useState([]);
  React.useEffect(() => {
    if (!userId) return;
    const app = initializeApp(FIREBASE_CONFIG);
    const db = getFirestore(app);
    getDoc(doc(db, userId, "likes")).then((docSnap) =>
      docSnap.exists() ? setLikes(docSnap.data().likes) : setLikes([])
    );
  }, [userId]);

  return likes;
}
