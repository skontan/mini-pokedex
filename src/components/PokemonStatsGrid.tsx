import React from "react";
import styled from "styled-components/native";
import { PokemonStat } from "../hooks/usePokemonWithEvolution";

const StatGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StatItem = styled.View`
  width: 48%;
  margin-bottom: 10px;
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
`;

const StatName = styled.Text`
  font-size: 16px;
  color: #666;
  text-transform: capitalize;
`;

const StatValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

type Props = {
  stats: PokemonStat[];
};

export const PokemonStatsGrid: React.FC<Props> = ({ stats }) => {
  return (
    <StatGrid>
      {stats.map((stat) => (
        <StatItem key={stat.stat.name}>
          <StatName>{stat.stat.name}</StatName>
          <StatValue>{stat.base_stat}</StatValue>
        </StatItem>
      ))}
    </StatGrid>
  );
};
