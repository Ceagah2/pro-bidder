import { InputProps } from "@/shared/types/Input"
import { Text, TextInput, View } from 'react-native'
import { S } from './styles'
export const Input = ({label ,...rest}: InputProps) => {
  return(
    <View style={S.container}>
      {label && <Text style={S.label}>{label}</Text>}
      <TextInput {...rest} style={S.input}/>
    </View>
  )
}