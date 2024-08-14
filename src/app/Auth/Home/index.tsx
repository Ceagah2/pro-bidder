import { Button } from "@/components/Button";
import { colors } from "@/shared/theme";
import { useAuth } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import { S } from './styles';

export default function Home(){
  const { signOut } = useAuth()
  return (
    <View style={S.container}>
      <Text>Home</Text>
      <View style={{ width: 300 }}>
        <Button
          text="Sair"
          backgroundColor={colors.secondary}
          textColor={colors.black}
          icon="exit"
          onPress={() => signOut()}
        />
      </View>
    </View>
  );
}