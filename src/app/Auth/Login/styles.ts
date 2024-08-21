import { useResponsive } from "@/shared/hooks/useResponsive";
import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  header: {
    width: "60%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  appName: {
    fontSize: useResponsive(18),
    fontFamily: "Nunito_700Bold",
    color: colors.primary,
  },
  headerText: {
    fontSize: useResponsive(12),
    fontFamily: "Roboto_400Regular",
  },
  loginForm: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  formText: {
    fontSize: useResponsive(10),
    fontFamily: "Roboto_400Regular",
    color: colors.text,
    marginTop: 16,
  },
  labelText: {
    fontSize: useResponsive(8),
    fontFamily: "Roboto_400Regular",
    color: colors.text,
  },
  buttonContainer: {
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});