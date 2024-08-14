import { colors } from "@/shared/theme"
import { Ionicons } from "@expo/vector-icons"
import { ActivityIndicator, Text, TouchableOpacity } from "react-native"
import { ButtonProps } from "./interface"
import { S } from './styles'

export const Button = ({ text, backgroundColor, textColor, isLoading = false, icon, ...rest }: ButtonProps) => {

const DynamicButton = {backgroundColor: backgroundColor || colors.primary}
const DynamicText = {color: textColor || colors.black}


  return (
    <TouchableOpacity
      disabled={isLoading}
      style={{ ...S.button, ...DynamicButton }}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={textColor || colors.black} />
      ) : (
        <>
          <Ionicons name={icon} size={24} color={textColor || colors.black} />
          <Text style={{ ...S.text, ...DynamicText }}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}