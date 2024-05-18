import type { Metadata } from "next";
import "@/const/globals.scss";

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
      <body>{children}</body>
    </html>
  );
}
