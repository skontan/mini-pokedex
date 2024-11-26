import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigatorParamList } from "./BottomTabNavigator";

type TabNames = keyof BottomTabNavigatorParamList;

type TabIconConfig = {
  [key in TabNames]: {
    focused: keyof typeof Ionicons.glyphMap;
    unfocused: keyof typeof Ionicons.glyphMap;
  };
};

export const TAB_ICONS: TabIconConfig = {
  RandomStack: {
    focused: "dice",
    unfocused: "dice-outline",
  },
  SearchStack: {
    focused: "search",
    unfocused: "search-outline",
  },
};

export const getTabBarIcon = (
  routeName: TabNames,
  focused: boolean
): { name: keyof typeof Ionicons.glyphMap; size: number; color: string } => {
  const iconName = TAB_ICONS[routeName][focused ? "focused" : "unfocused"];
  return {
    name: iconName,
    size: focused ? 28 : 24,
    color: focused ? "#ff6f61" : "gray",
  };
};
