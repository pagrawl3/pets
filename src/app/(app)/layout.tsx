"use client";

import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import VerticalNav from "@/components/ui/VerticalNav";
import Header from "@/components/ui/Header";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import { UserContext } from "@/hooks/useUserContext";
import styles from "./layout.module.scss";
import "@/const/globals.scss";
import Loader from "@/components/ui/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  useIsLoggedIn((user) => {
    if (!user) router.push("/login");
    else {
      setLoading(false);
      setUser(user);
    }
  });

  if (loading) return <Loader />;
  return (
    <UserContext.Provider value={user}>
      <div className={clsx(styles.body)}>
        <VerticalNav />
        <div className={styles.bodyContent}>
          <Header />
          {children}
        </div>
      </div>
    </UserContext.Provider>
  );
}
