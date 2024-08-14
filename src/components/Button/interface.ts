import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  isLoading?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
}