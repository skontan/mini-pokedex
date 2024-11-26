import React from "react";
import styled from "styled-components/native";

export const PokemonItem = styled.TouchableOpacity`
  text-transform: capitalize;
  background-color: #eef6ff;
  text-align: center;
  padding: 12px;
  margin: 8px 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PokemonItemText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  text-transform: capitalize;
  text-align: center;
`;

type Props = {
  title: string;
  onPress: (identifier: string) => void;
};

export const PokemonListItem: React.FC<Props> = ({ title, onPress }) => (
  <PokemonItem onPress={() => onPress(title)}>
    <PokemonItemText>{title}</PokemonItemText>
  </PokemonItem>
);
