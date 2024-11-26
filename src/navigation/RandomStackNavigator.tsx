import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import RandomScreen from "../screens/RandomScreen";
import DetailsScreen from "../screens/DetailsScreen";

export type RandomStackParamList = {
  Random: undefined;
  Details: { identifier: number | string };
};

const RandomStack = createNativeStackNavigator<RandomStackParamList>();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackButtonDisplayMode: "default",
  headerBackTitle: "Random",
  headerTitle: "",
  headerTransparent: true,
  headerTintColor: "white",
};

const RandomStackNavigator: React.FC = () => {
  return (
    <RandomStack.Navigator initialRouteName="Random">
      <RandomStack.Screen
        name="Random"
        component={RandomScreen}
        options={navigationOptions}
      />
      <RandomStack.Screen
        name="Details"
        component={DetailsScreen}
        options={navigationOptions}
      />
    </RandomStack.Navigator>
  );
};

export default RandomStackNavigator;
