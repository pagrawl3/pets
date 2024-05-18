import React from "react";
import Fuse from "fuse.js";

export default function useSearch({
  items,
  searchKeys,
}: {
  items: any[];
  searchKeys: string[];
}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([] as any[]);
  const fuseRef = React.useRef() as React.MutableRefObject<Fuse<any> | null>;

  const search = React.useCallback(
    (value: string) => {
      setSearchTerm(value);
      if (!value) return setSearchResults(items);
      if (!fuseRef.current) return;
      const results = fuseRef.current.search(value);
      setSearchResults(results.map(({ item }) => item));
    },
    [items]
  );

  React.useEffect(() => {
    fuseRef.current = new Fuse(items, {
      keys: searchKeys,
    });
    setSearchResults(items);
  }, [items, searchKeys]);

  return { searchResults, search, searchTerm };
}
