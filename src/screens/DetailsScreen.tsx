import React from "react";
import styled from "styled-components/native";
import { PokemonDetails } from "../components/PokemonDetails";
import { usePokemonWithEvolution } from "../hooks/usePokemonWithEvolution";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 16px;
`;

const DetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { identifier } = route.params;

  const { data, isFetching } = usePokemonWithEvolution(identifier);

  const pokemon = data?.pokemon;
  const evolutionChain = data?.evolutionChain;

  return (
    <Container>
      <PokemonDetails
        pokemon={pokemon}
        evolutionChain={evolutionChain}
        isRefreshing={isFetching}
      />
    </Container>
  );
};

export default DetailsScreen;
