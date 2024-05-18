"use client";

import InputText from "@/components/inputs/InputText";
import styles from "./page.module.scss";
import useSearch from "@/hooks/useSearch";

const items = [];
export default function Home() {
  const { searchResults, searchTerm, search } = useSearch({
    items,
    searchKeys: [],
  });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <InputText
          label="Search"
          placeholder="Start typing to search..."
          value={searchTerm}
          onChange={search}
          autoFocus
        />
      </div>
    </main>
  );
}
