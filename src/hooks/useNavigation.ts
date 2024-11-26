import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from "@react-navigation/native";
import { SearchStackParamList } from "../navigation/SearchStackNavigator";
import { RandomStackParamList } from "../navigation/RandomStackNavigator";

export const useNavigation = useNativeNavigation<
  NavigationProp<SearchStackParamList & RandomStackParamList>
>;
