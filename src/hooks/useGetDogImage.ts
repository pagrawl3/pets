import React from "react";

const BASE_URL = `https://dog.ceo/api`;
const Cache = {} as Record<string, string>;

export default function useGetDogImage({
  slug,
  query = 1,
}: Readonly<{ slug: string; query: number }>): {
  src: string;
  loading: boolean;
  onLoad: () => void;
} {
  const [src, setSrc] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const isRunningRef = React.useRef(false);

  React.useEffect(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    const [breed, subBreed] = slug.split("-");
    const postfix = subBreed ? `/${subBreed}` : "";
    const key = `${slug}${query}`;
    const url = `${BASE_URL}/breed${postfix}/${breed}/images/random`;
    if (Cache[key]) return setSrc(Cache[key]);
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        Cache[key] = data.message;
        setSrc(data.message);
        isRunningRef.current = false;
      });
  }, [query, slug]);

  const onLoad = React.useCallback(() => setLoading(false), []);

  return { src, loading, onLoad };
}
