"use client";

import InputText from "@/components/inputs/InputText";
import styles from "./page.module.scss";
import useSearch from "@/hooks/useSearch";
import useGetAllBreeds from "@/hooks/useGetAllBreeds";

const searchKeys = ["title"];

export default function Home() {
  const [breeds, loading] = useGetAllBreeds();
  const { searchResults, searchTerm, search } = useSearch({
    items: breeds,
    searchKeys,
  });

  if (loading) return <h1>Loading...</h1>;

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
