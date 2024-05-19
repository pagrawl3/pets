"use client";

import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoginCard from "@/components/ui/LoginCard";
import styles from "./page.module.scss";
import FIREBASE_CONFIG from "@/const/firebaseConfig";

export default function Signup() {
  const signup = React.useCallback(({ email, password }) => {
    initializeApp(FIREBASE_CONFIG);
    createUserWithEmailAndPassword(getAuth(), email, password).catch(
      (error) => {
        console.log("err", error);
      }
    );
  }, []);

  return (
    <main className={styles.main}>
      <LoginCard type="SIGNUP" onSubmit={signup} />
    </main>
  );
}
