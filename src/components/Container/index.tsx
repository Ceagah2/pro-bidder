import { colors } from "@/shared/theme";
import { ContainerProps } from "@/shared/types/Container";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { S } from "./styles";
export const Container = ({ children, headerTitle, shouldBack }: ContainerProps) => {
  const router = useRouter()
  const dynamicStyles = shouldBack ? {} : { justifyContent: "center", width: "100%" };
  return (
    <View style={S.container}>
      <View style={S.header}>
        <View style={[S.headerLine, dynamicStyles]}>
          {shouldBack && (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
          )}
          <Text style={S.headerTitle}>{headerTitle}</Text>
        </View>
      </View>
      {children}
    </View>
  );
};
