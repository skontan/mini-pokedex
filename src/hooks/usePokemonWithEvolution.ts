import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type EvolutionChain = {
  id: number;
  baby_trigger_item: {
    name: string;
    url: string;
  } | null;
  chain: ChainLink;
};

export type ChainLink = {
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
};

export type EvolutionDetail = {
  item: {
    name: string;
    url: string;
  } | null;
  trigger: {
    name: string;
    url: string;
  };
  gender: number | null;
  held_item: {
    name: string;
    url: string;
  } | null;
  known_move: {
    name: string;
    url: string;
  } | null;
  known_move_type: {
    name: string;
    url: string;
  } | null;
  location: {
    name: string;
    url: string;
  } | null;
  min_level: number | null;
  min_happiness: number | null;
  min_beauty: number | null;
  min_affection: number | null;
  needs_overworld_rain: boolean;
  party_species: {
    name: string;
    url: string;
  } | null;
  party_type: {
    name: string;
    url: string;
  } | null;
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: {
    name: string;
    url: string;
  } | null;
  turn_upside_down: boolean;
};

export type PokemonStat = {
  stat: {
    name: string;
    url: string;
  };
  effort: number;
  base_stat: number;
};

type PokemonSprites = {
  front_default: string;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  forms: {
    name: string;
    url: string;
  }[];
  species: {
    name: string;
    url: string;
  };
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

export type PokemonWithEvolution = {
  pokemon: Pokemon;
  evolutionChain: EvolutionChain;
};

const fetchPokemon = async (identifier: string | number): Promise<Pokemon> => {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${identifier}`
  );
  return response.data;
};

const fetchEvolutionChain = async (
  speciesUrl: string
): Promise<EvolutionChain> => {
  const speciesResponse = await axios.get<{ evolution_chain: { url: string } }>(
    speciesUrl
  );
  const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
  const evolutionResponse = await axios.get<EvolutionChain>(evolutionChainUrl);
  return evolutionResponse.data;
};

const fetchPokemonWithEvolution = async (
  identifier: string | number
): Promise<PokemonWithEvolution> => {
  const pokemon = await fetchPokemon(identifier);

  const evolutionChain = await fetchEvolutionChain(pokemon.species.url);

  return { pokemon, evolutionChain };
};

export const usePokemonWithEvolution = (identifier: string | number) => {
  return useQuery({
    queryKey: ["pokemonWithEvolution", identifier],
    queryFn: () => fetchPokemonWithEvolution(identifier),
    staleTime: Infinity,
    enabled: Boolean(identifier),
    placeholderData: (prev) => prev,
  });
};
