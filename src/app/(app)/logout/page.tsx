"use client";

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import FIREBASE_CONFIG from "@/const/firebaseConfig";
import styles from "./page.module.scss";

export default function Signup() {
  React.useEffect(() => {
    initializeApp(FIREBASE_CONFIG);
    signOut(getAuth());
  }, []);

  return <main className={styles.main}>Logging out...</main>;
}
