"use client";

import React from "react";
import Link from "next/link";
import InputText from "@/components/inputs/InputText";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import styles from "./LoginCard.module.scss";

export default function LoginCard({
  type = "LOGIN",
  onSubmit,
  error,
}: Readonly<{
  type?: "LOGIN" | "SIGNUP";
  onSubmit: (data: { email: string; password: string }) => void;
  error: { email?: string; password?: string };
}>) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const isLogin = type === "LOGIN";

  return (
    <Card className={styles.card}>
      <div>
        <h1>{isLogin ? "Login" : "Signup"}</h1>
        <h3>Your favorite dog app 🐶</h3>
      </div>
      <div>
        <InputText
          value={email}
          onChange={setEmail}
          label="Email"
          error={error.email}
        />
        <InputText
          value={password}
          onChange={setPassword}
          label="Password"
          type="password"
          error={error.password}
        />
      </div>
      <div>
        <Button
          onClick={() => onSubmit({ email, password })}
          variant={Button.VARIANTS.PRIMARY}
          size={Button.SIZES.LARGE}
        >
          Login
        </Button>
      </div>
      {isLogin ? (
        <span>
          Not a user yet? <Link href="/signup">Signup</Link>
        </span>
      ) : (
        <span>
          Already a user? <Link href="/login">Login</Link>
        </span>
      )}
    </Card>
  );
}
