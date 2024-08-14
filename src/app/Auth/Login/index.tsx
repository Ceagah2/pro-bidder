import { Button } from '@/components/Button';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { S } from './styles';



WebBrowser.maybeCompleteAuthSession();
export default function Auth() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const googleOAuth = useOAuth({
    strategy: "oauth_google",
  })

  const onGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await googleOAuth.startOAuthFlow({redirectUrl})

      if(oAuthFlow.authSessionResult?.type === "success") {
        if(oAuthFlow.setActive){
          await oAuthFlow.setActive({session: oAuthFlow.createdSessionId})
        }
      } else {
        setIsLoading(false)
      }
      
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync()

    return () => {
      WebBrowser.coolDownAsync()
    }
  },[])
  return (
    <View style={S.container}>
      <View style={S.buttonContainer}>
        <Button
          text="Login com Google"
          backgroundColor="black"
          textColor="white"
          icon="logo-google"
          onPress={onGoogleSignIn}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}