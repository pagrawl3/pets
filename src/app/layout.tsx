import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "@/const/globals.scss";

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
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
