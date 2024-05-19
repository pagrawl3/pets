import React from "react";
import styles from "./Header.module.scss";
import Navigation from "../Navigation";
import { usePathname } from "next/navigation";

const STEPS: string[] = ["Select your top 3 breeds", "View feed"];

export default function Header() {
  const pathname = usePathname();
  const currentStep = pathname === "/feed" ? 1 : 0;
  return (
    <div className={styles.header}>
      <Navigation steps={STEPS} value={currentStep} />
    </div>
  );
}
