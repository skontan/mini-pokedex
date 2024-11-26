import React, { useCallback } from "react";
import { ScrollView, RefreshControl, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { PokemonDetails } from "../components/PokemonDetails";
import { useRandomPokemonId } from "../hooks/useRandomPokemonId";
import { usePokemonWithEvolution } from "../hooks/usePokemonWithEvolution";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
`;

const RandomScreen: React.FC = () => {
  const { pokemonId, refresh } = useRandomPokemonId();
  const { data, isFetching } = usePokemonWithEvolution(pokemonId);
  const { top } = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  const pokemon = data?.pokemon;
  const evolutionChain = data?.evolutionChain;

  return (
    <Container>
      {pokemon && evolutionChain && (
        <PokemonDetails
          pokemon={pokemon}
          evolutionChain={evolutionChain}
          isRefreshing={isFetching}
          onRefresh={refresh}
        />
      )}
    </Container>
  );
};

export default RandomScreen;
