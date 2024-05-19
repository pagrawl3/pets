import React from "react";
import { Breed } from "@/const/types";

const BASE_URL = `https://dog.ceo/api`;

export default function useGetAllBreeds(): [Breed[], boolean] {
  const [breeds, setBreeds] = React.useState([] as Breed[]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${BASE_URL}/breeds/list/all`)
      .then((response) => response.json())
      .then((data) => {
        return Object.keys(data.message).reduce((acc: Breed[], key) => {
          return [
            ...acc,
            ...(data.message[key].length
              ? data.message[key].map((breed: Breed) => ({
                  slug: `${breed}-${key}`,
                  title: `${breed} ${key}`,
                }))
              : [
                  {
                    slug: key,
                    title: key,
                  },
                ]),
          ];
        }, []);
      })
      .then((breeds: Breed[]) => setBreeds(breeds))
      .finally(() => setLoading(false));
  }, []);

  return [breeds, loading];
}
