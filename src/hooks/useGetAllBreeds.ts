import React from "react";

const BASE_URL = `https://dog.ceo/api`;

export default function useGetAllBreeds(): [
  { slug: string; title: string }[],
  boolean
] {
  const [breeds, setBreeds] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${BASE_URL}/breeds/list/all`)
      .then((response) => response.json())
      .then((data) => {
        return Object.keys(data.message).reduce(
          (acc, key) => [
            ...acc,
            ...(data.message[key].length
              ? data.message[key].map((breed) => ({
                  slug: `${breed}-${key}`,
                  title: `${breed} ${key}`,
                }))
              : [
                  {
                    slug: key,
                    title: key,
                  },
                ]),
          ],
          []
        );
      })
      .then(setBreeds)
      .finally(() => setLoading(false));
  }, []);

  return [breeds, loading];
}
