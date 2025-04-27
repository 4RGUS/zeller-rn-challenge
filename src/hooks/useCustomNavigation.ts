import { useNavigation as useNativeNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import { useRoute } from "@react-navigation/native";

export function useCustomNavigation() {
  const route = useRoute();
  const navigation = useNativeNavigation();

  const typedNavigation = navigation as NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;

  return typedNavigation;
}
