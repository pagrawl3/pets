"use client";

import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoginCard from "@/components/ui/LoginCard";
import styles from "./page.module.scss";
import FIREBASE_CONFIG from "@/const/firebaseConfig";
import { LoginInput } from "@/const/types";

export default function Signup() {
  const [error, setError] = React.useState<{
    email?: string;
    password?: string;
  }>({});

  const signup = React.useCallback(
    ({ email, password }: Readonly<LoginInput>) => {
      if (!email)
        return setError((e) => ({ ...e, email: "Email is required" }));
      if (!password)
        return setError((e) => ({ ...e, password: "Password is required" }));
      initializeApp(FIREBASE_CONFIG);
      createUserWithEmailAndPassword(getAuth(), email, password).catch(
        (error) => {
          switch (error.code) {
            case "auth/invalid-email":
              setError((e) => ({ email: "Invalid email" }));
              break;
            case "auth/weak-password":
              setError((e) => ({
                password: "Password should be > 6 characters",
              }));
              break;
            case "auth/email-already-in-use":
              setError((e) => ({
                email: "Email already in use",
              }));
              break;
            case "auth/invalid-credential":
              setError((e) => ({ password: "Invalid credentials" }));
              break;
            default:
              setError((e) => ({ email: "Something went wrong" }));
          }
        }
      );
    },
    []
  );

  return (
    <main className={styles.main}>
      <LoginCard type="SIGNUP" onSubmit={signup} error={error} />
    </main>
  );
}
