import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  label: {
    fontFamily: "Roboto_500Medium",
    fontSize: 14,
    color: colors.text,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 10,
  },
})