import { useResponsive } from "@/shared/hooks/useResponsive";
import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 75,
    backgroundColor: colors.background,
  },
  userCard: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  userAvatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: colors.primary,
    borderWidth: 2,
    marginLeft: 25,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "column",
    paddingRight: 50,
  },
  greetings: {
    fontSize: useResponsive(16),
    fontFamily: "Nunito_700Bold",
    color: colors.text,
  },
  userName: {
    fontSize: useResponsive(14),
    fontFamily: "Nunito_700Bold",
    color: colors.text,
  },
  listContainer: {
    padding: 16,
  },
  jobItem: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 30,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Nunito_700Bold",
  },
  description: {
    fontSize: 14,
    color: colors.text,
    marginTop: 4,
  },
  sponsor: {
    fontSize: 14,
    color: colors.black,
    marginTop: 8,
  },
  eta: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 4,
  },
  buttonContainer: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});