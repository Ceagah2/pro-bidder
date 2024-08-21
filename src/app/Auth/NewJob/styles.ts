import { useResponsive } from "@/shared/hooks/useResponsive";
import { colors } from "@/shared/theme";
import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: useResponsive(14),
    fontFamily: "Roboto_400Regular",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.background,
    paddingHorizontal: 8,
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.background,
    gap: 16,
  },
  errorMessage: {
    color: colors.warning,
    fontFamily: "Nunito_400Regular",
  },
  label: {
    fontFamily: "Roboto_500Medium",
    fontSize: 14,
    color: colors.text,
  },
  tasksContainer: {
    width: "100%",
    height: 80,
    maxHeight: 150,
    backgroundColor: colors.white,
    gap: 16,
    borderRadius: 10,
    padding: 16,
  },
  taskItem: {
    width: "100%",
    padding: 12,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: useResponsive(14),
    fontFamily: "Roboto_500Medium",
    color: colors.text,
  },
  taskDescription: {
    fontSize: useResponsive(12),
    fontFamily: "Roboto_400Regular",
    color: colors.text,
  },
  taskEta: {
    fontSize: useResponsive(12),
    fontFamily: "Roboto_400Regular",
    color: colors.text,
    marginTop: 4,
  },
  removeTask: {
    fontSize: useResponsive(12),
    fontFamily: "Roboto_500Medium",
    color: colors.danger,
    marginTop: 8,
  },
  addButton: {
    width: "100%",
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  addButtonText: {
    fontSize: useResponsive(14),
    fontFamily: "Roboto_500Medium",
    color: colors.white,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  modalTitle: {
    fontSize: useResponsive(16),
    fontFamily: "Roboto_500Medium",
    color: colors.text,
    marginBottom: 16,
  },
  saveTaskButton: {
    width: "100%",
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  saveTaskButtonText: {
    fontSize: useResponsive(14),
    fontFamily: "Roboto_500Medium",
    color: colors.white,
  },
  noTasksText:{
    fontSize: useResponsive(12),
    fontFamily: "Roboto_400Regular",
    color: colors.text,
  }
});
