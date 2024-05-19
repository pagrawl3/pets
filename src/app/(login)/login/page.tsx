"use client";

import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginCard from "@/components/ui/LoginCard";
import styles from "./page.module.scss";
import FIREBASE_CONFIG from "@/const/firebaseConfig";
import { LoginInput } from "@/const/types";

export default function Login() {
  const login = React.useCallback(
    ({ email, password }: Readonly<LoginInput>) => {
      initializeApp(FIREBASE_CONFIG);
      signInWithEmailAndPassword(getAuth(), email, password).catch((error) => {
        console.log("err", error);
      });
    },
    []
  );

  return (
    <main className={styles.main}>
      <LoginCard type="LOGIN" onSubmit={login} />
    </main>
  );
}
