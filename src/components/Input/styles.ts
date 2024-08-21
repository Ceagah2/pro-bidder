import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  label: {
    fontFamily: "Roboto_500Medium",
    fontSize: 14,
    color: colors.text,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.lightGray,
  },
});