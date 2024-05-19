"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import Loader from "@/components/ui/Loader";

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

  if (loading) return <Loader />;
  return children;
}
