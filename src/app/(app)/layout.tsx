import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import VerticalNav from "@/components/ui/VerticalNav";
import Header from "@/components/ui/Header";
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
    <div className={clsx(styles.body)}>
      <VerticalNav />
      <div className={styles.bodyContent}>
        <Header />
        {children}
      </div>
    </div>
  );
}
