import { InputProps } from "@/shared/types/Input"
import { Text, TextInput, View } from 'react-native'
import { S } from './styles'
export const Input = ({label , onChange, onBlur, value,...rest}: InputProps) => {
  
  const height = rest.multiline ? 100 : 40
  return (
    <View style={[S.container]}>
      {label && <Text style={S.label}>{label}</Text>}
      <TextInput
        {...rest}
        style={[S.input, { height }]}
        onChangeText={onChange} 
        onBlur={onBlur} 
        value={value} 
      />
    </View>
  );
}