import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import AppIcon from '@assets/images/icon.png';
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { S } from "./styles";

WebBrowser.maybeCompleteAuthSession();

export default function Auth() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null); 
  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const appleOAuth = useOAuth({ strategy: "oauth_apple" });
  const githubOAuth = useOAuth({ strategy: "oauth_github" });

  const onSignIn = async (strategy: "google" | "apple" | "github") => {
    let oauthProvider;
    switch (strategy) {
      case "google":
        oauthProvider = googleOAuth;
        break;
      case "apple":
        oauthProvider = appleOAuth;
        break;
      case "github":
        oauthProvider = githubOAuth;
        break;
      default:
        throw new Error("Unsupported OAuth strategy");
    }

    try {
      setLoadingButton(strategy); 
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await oauthProvider.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      }
    } catch (error) {
      console.log(
        `Error during ${
          strategy.charAt(0).toUpperCase() + strategy.slice(1)
        } Sign-In:`,
        JSON.stringify(error, null, 2)
      );
    } finally {
      setLoadingButton(null); 
    }
  };

  const redirectToSite = () => {
    Linking.openURL("https://fantasyforge.vercel.app/");
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <Container headerTitle="" shouldBack={false}>
      <View style={S.content}>
        <View style={S.header}>
          <Text style={S.appName}>Pro-Bidder</Text>
          <Text style={S.headerText}>
            Simplificando orçamentos, conquistando mais clientes
          </Text>
        </View>
        <Image source={AppIcon} style={S.logoImage} />
        <View style={S.loginForm}>
          <View style={S.buttonContainer}>
            <Button
              text="Entrar com Google"
              backgroundColor="black"
              textColor="white"
              icon="logo-google"
              iconColor="white"
              onPress={() => onSignIn("google")}
              isLoading={loadingButton === "google"}
            />
          </View>
          <View style={S.buttonContainer}>
            <Button
              text="Entrar com Apple"
              backgroundColor="black"
              textColor="white"
              icon="logo-apple"
              iconColor="white"
              onPress={() => onSignIn("apple")}
              isLoading={loadingButton === "apple"}
            />
          </View>
          <View style={S.buttonContainer}>
            <Button
              text="Entrar com Github"
              backgroundColor="black"
              textColor="white"
              icon="logo-github"
              iconColor="white"
              onPress={() => onSignIn("github")}
              isLoading={loadingButton === "github"}
            />
          </View>
          <Text style={S.formText}>
            Escolha uma das opções acima para fazer login e aproveitar as
            funcionalidades.
          </Text>
        </View>
        <TouchableOpacity style={S.footer} onPress={redirectToSite}>
          <Text style={S.footerText}>
            Termos de Uso | Política de Privacidade
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
