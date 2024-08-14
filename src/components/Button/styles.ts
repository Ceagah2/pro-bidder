import { useResponsive } from "@/shared/hooks/useResponsive";
import { fonts } from "@/shared/theme";
import { StyleSheet } from "react-native";


export const S = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  text:{
    fontFamily: fonts.detail,
    fontSize: useResponsive(12)
  }
})