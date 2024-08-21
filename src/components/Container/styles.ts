import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  header: {
    width: "100%",
    height: 110,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: colors.highlight,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerLine:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
  },
  content:{
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 16,
  }
});
