import { useState, useEffect, useCallback } from "react";

const MAX_POKEMON_ID = 1010;

export const useRandomPokemonId = () => {
  const [pokemonId, setPokemonId] = useState<number>(1);

  const generateRandomId = useCallback(() => {
    const id = Math.ceil(Math.random() * MAX_POKEMON_ID);
    setPokemonId(id);
  }, []);

  useEffect(() => {
    generateRandomId();
  }, [generateRandomId]);

  return { pokemonId, refresh: generateRandomId };
};
