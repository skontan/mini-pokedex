import React from "react";
import styled from "styled-components/native";
import { EvolutionDetails } from "./EvolutionDetails";
import { EvolutionChain, Pokemon } from "../hooks/usePokemonWithEvolution";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native";
import { PokemonStatsGrid } from "./PokemonStatsGrid";
import { PokemonImage } from "./PokemonImage";

const Container = styled.View`
  flex: 1;
  background-color: #f3f4f6;
  width: 100%;
`;

const Header = styled.View<{ $topInset: number }>`
  align-items: center;
  background-color: #ff6f61;
  padding: 20px;
  padding-top: ${(props) => props.$topInset}px;
  border-radius: 20px;
  width: 100%;
`;

const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
  margin-top: 12px;
  text-align: center;
`;

const Section = styled.View`
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const PokemonDetails: React.FC<{
  pokemon: Pokemon | undefined;
  evolutionChain: EvolutionChain | undefined;
  isRefreshing?: boolean;
  onRefresh?: () => void;
}> = ({ pokemon, evolutionChain, isRefreshing, onRefresh }) => {
  const { top } = useSafeAreaInsets();

  return (
    <Container>
      <Header $topInset={top}>
        <PokemonImage
          isLoading={!pokemon && isRefreshing}
          uri={pokemon?.sprites.front_default}
        />
        <Name>{pokemon?.name}</Name>
      </Header>

      <ScrollView
        contentContainerStyle={{ paddingTop: 20 }}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={Boolean(isRefreshing)}
              onRefresh={onRefresh}
              tintColor={"#ff6f61"}
              enabled={false}
            />
          ) : undefined
        }
      >
        <Section>
          <SectionTitle>Stats</SectionTitle>
          <PokemonStatsGrid stats={pokemon?.stats || []} />
        </Section>

        <Section>
          <SectionTitle>Evolutions</SectionTitle>
          <EvolutionDetails chain={evolutionChain?.chain} />
        </Section>
      </ScrollView>
    </Container>
  );
};
