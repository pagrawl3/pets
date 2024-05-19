"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  useIsLoggedIn((user) => {
    if (user) router.push("/");
    else setLoading(false);
  });

  if (loading) return <div>Loading...</div>;
  return children;
}
