import { useQuery } from "@tanstack/react-query";
import Fuse from "fuse.js";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const usePokemonSearch = () => {
  const [query, setQuery] = useState("");

  const {
    data: pokemonNames,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemonNames"],
    queryFn: async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=2000"
      );
      return response.data.results.map(
        (pokemon: { name: string }) => pokemon.name
      );
    },
    staleTime: Infinity,
  });

  const debouncedQuery = useDebounce(query, 300);

  const fuse = useMemo(
    () =>
      pokemonNames
        ? new Fuse<string>(pokemonNames, {
            threshold: 0.5,
          })
        : null,
    [pokemonNames]
  );

  const searchResults = useMemo(() => {
    if (!debouncedQuery || !fuse) return [];
    return fuse.search(debouncedQuery).map((result) => result.item);
  }, [debouncedQuery, fuse]);

  const searchPokemon = (newQuery: string) => {
    setQuery(newQuery);
  };

  return { searchPokemon, searchResults, isLoading, error };
};

export default usePokemonSearch;
