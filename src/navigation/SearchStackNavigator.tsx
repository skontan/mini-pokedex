import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import DetailsScreen from "../screens/DetailsScreen";

export type SearchStackParamList = {
  Search: undefined;
  Details: { identifier: number | string };
};

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitle: "",
  headerTransparent: true,
  headerTintColor: "white",
  headerBackTitle: "Search",
};

const SearchStackNavigator: React.FC = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search">
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={navigationOptions}
      />
      <SearchStack.Screen
        name="Details"
        component={DetailsScreen}
        options={navigationOptions}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
