import React from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import clsx from "clsx";
import styles from "./layout.module.scss";
import "@/const/globals.scss";
const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dogs",
  description: "Your favorite app to view your favorite dogs! 🐶",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" href="/og.png" />
      <body className={clsx(styles.body, workSans.className)}>{children}</body>
    </html>
  );
}
