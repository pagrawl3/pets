"use client";

import React from "react";
import useGetAllBreeds from "@/hooks/useGetAllBreeds";
import useSearch from "@/hooks/useSearch";
import InputText from "@/components/inputs/InputText";
import BreedCard from "@/components/ui/BreedCard";
import styles from "./page.module.scss";
import Footer from "@/components/ui/Footer";
import { Breed } from "@/const/types";

const searchKeys = ["title"];

export default function Home() {
  const [breeds, loading] = useGetAllBreeds();

  const [selectedBreeds, setSelectedBreeds] = React.useState(() => {
    const selectedBreeds = sessionStorage.getItem("selectedBreeds");
    try {
      return JSON.parse(selectedBreeds || "");
    } catch (e) {
      return [];
    }
  });

  const { searchResults, searchTerm, search } = useSearch({
    items: breeds,
    searchKeys,
  });

  const handleSelect = React.useCallback((breed: Readonly<Breed>) => {
    setSelectedBreeds((prev: Breed[]) => {
      const exists = prev.find(({ slug }) => slug === breed.slug);
      if (exists) return prev.filter(({ slug }) => slug !== breed.slug);
      if (prev.length >= 3) return prev;
      return [...prev, breed];
    });
  }, []);

  const handleRemove = React.useCallback((slug: string) => {
    setSelectedBreeds((prev: Breed[]) =>
      prev.filter((breed) => breed.slug !== slug)
    );
  }, []);

  React.useEffect(() => {
    sessionStorage.setItem("selectedBreeds", JSON.stringify(selectedBreeds));
  }, [selectedBreeds]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <main className={styles.main}>
        <InputText
          label="Search"
          placeholder="Start typing to search..."
          value={searchTerm}
          onChange={search}
          autoFocus
        />
        <ul className={styles.breeds}>
          {searchResults.map((item) => (
            <BreedCard
              slug={item.slug}
              key={item.slug}
              title={item.title}
              onClick={handleSelect}
              selected={
                !!selectedBreeds.find(({ slug }: Breed) => slug === item.slug)
              }
            />
          ))}
        </ul>
      </main>
      <Footer
        onRemoveSelectedBreed={handleRemove}
        selectedBreeds={selectedBreeds}
      />
    </>
  );
}
