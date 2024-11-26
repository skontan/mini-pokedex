import React, { useCallback } from "react";
import styled from "styled-components/native";
import { ChainLink } from "../hooks/usePokemonWithEvolution";
import { useNavigation } from "../hooks/useNavigation";
import { renderEvolutionRequirements } from "../utils/renderEvolutionRequirements";

const EvolutionContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const EvolutionCard = styled.TouchableOpacity`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-top: 6px;
  margin-bottom: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const PokemonName = styled.Text`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`;

const EvolutionRequirement = styled.Text`
  font-size: 14px;
  color: #555;
  margin-top: 4px;
`;

const Arrow = styled.Text`
  font-size: 24px;
  margin: 0 8px;
  color: #666;
  text-align: center;
  width: 100%;
`;

export const EvolutionDetails: React.FC<{ chain: ChainLink | undefined }> = ({
  chain,
}) => {
  const navigation = useNavigation();

  const renderEvolutionCard = useCallback(
    (link: ChainLink): JSX.Element => (
      <EvolutionCard
        key={link.species.name}
        onPress={() =>
          navigation.navigate("Details", {
            identifier: link.species.name,
          })
        }
      >
        <PokemonName>{link.species.name}</PokemonName>
        {link.evolution_details.length > 0 && (
          <EvolutionRequirement>
            {renderEvolutionRequirements(link.evolution_details)}
          </EvolutionRequirement>
        )}
      </EvolutionCard>
    ),
    [navigation]
  );

  const renderEvolution = (link: ChainLink | undefined): JSX.Element[] => {
    if (!link) return [];

    const current = [renderEvolutionCard(link)];

    if (link.evolves_to.length > 0) {
      const evolutions = link.evolves_to.flatMap(renderEvolution);
      return [
        ...current,
        <Arrow key={`${link.species.name}-arrow`}>↓</Arrow>,
        ...evolutions,
      ];
    }

    return current;
  };

  return <EvolutionContainer>{renderEvolution(chain)}</EvolutionContainer>;
};
