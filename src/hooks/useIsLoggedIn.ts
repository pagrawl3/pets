import React from "react";
import FIREBASE_CONFIG from "@/const/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useIsLoggedIn(callback: (user: any) => void) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    initializeApp(FIREBASE_CONFIG);
    const auth = getAuth();
    setLoading(true);
    onAuthStateChanged(auth, callback);
  }, [callback]);

  return loading;
}
