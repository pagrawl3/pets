import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import VerticalNav from "@/components/VerticalNav";
import Header from "@/components/Header";
import styles from "./layout.module.scss";
import "@/const/globals.scss";
import clsx from "clsx";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dogs! 🐶",
  description: "Your favorite app to view your favorite dogs! 🐶",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(styles.body, workSans.className)}>
        <VerticalNav />
        <div className={styles.bodyContent}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
