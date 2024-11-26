import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import usePokemonSearch from "../hooks/useSearchPokemon";
import { PokemonListItem } from "../components/PokemonListItem";
import { useNavigation } from "../hooks/useNavigation";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #f7f7ff;
  padding: 16px;
`;

export const Header = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #ff6f61;
  text-align: center;
`;

export const SearchInput = styled.TextInput`
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  padding: 0 16px;
  font-size: 16px;
  color: #333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #ffcc00;
  margin: 20px;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: #888;
  text-align: center;
  margin-top: 24px;
`;

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const { searchPokemon, searchResults, isLoading, error } = usePokemonSearch();

  const navigation = useNavigation();

  const handleSearch = (text: string) => {
    setQuery(text);
    searchPokemon(text);
  };

  const handlePressListItem = (identifier: string) => {
    navigation.navigate("Details", { identifier });
  };

  return (
    <SafeArea>
      <KeyboardAvoidingView behavior="padding">
        <Header>Pokémon Search</Header>
        <SearchInput
          placeholder="Search Pokémon name"
          placeholderTextColor="#555"
          value={query}
          onChangeText={handleSearch}
        />
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={searchResults}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <PokemonListItem title={item} onPress={handlePressListItem} />
          )}
          ListEmptyComponent={() => (
            <EmptyText>{query ? "No Pokémon found!" : ""}</EmptyText>
          )}
        />
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default SearchScreen;
