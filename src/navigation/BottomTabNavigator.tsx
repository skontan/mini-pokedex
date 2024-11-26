import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RandomStackNavigator from "./RandomStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { getTabBarIcon } from "./tabConfig";
import { Ionicons } from "@expo/vector-icons";

export type BottomTabNavigatorParamList = {
  RandomStack: undefined;
  SearchStack: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            const {
              name,
              size: iconSize,
              color: iconColor,
            } = getTabBarIcon(route.name, focused);

            return (
              <Ionicons
                name={name}
                size={iconSize}
                color={iconColor || color}
              />
            );
          },
          tabBarActiveTintColor: "#ff6f61",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="RandomStack"
          component={RandomStackNavigator}
          options={{ headerShown: false, title: "Random" }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStackNavigator}
          options={{ headerShown: false, title: "Search" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
