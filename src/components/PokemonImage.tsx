import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

type Props = {
  isLoading: boolean | undefined;
  uri: string | undefined;
};

export const PokemonImage: React.FC<Props> = ({ isLoading, uri }) => {
  return (
    <ImageContainer>
      {isLoading ? (
        <ActivityIndicator size="large" color="#ff6f61" />
      ) : (
        <Image source={{ uri }} />
      )}
    </ImageContainer>
  );
};
