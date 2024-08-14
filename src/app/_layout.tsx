import ToastProviderWrapper from "@/components/Toasty";
import { GetItem } from "@/shared/hooks/useStorage";
import { tokenCache } from "@/shared/tokenCache";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { router, Slot } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";


function InitialLayout() {
  const {isLoaded, isSignedIn} = useAuth();
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);
  const fetchData = async () => {
    try {
      const value = await GetItem("isOnboarded");
      setIsOnboarded(!!value);
    } catch (error) {
      console.error("Error fetching onboarding status:", error);
    }
  };

  useEffect(() => {
    if(!isLoaded) return;
    if(isSignedIn || isOnboarded === null) fetchData();
    if(isSignedIn && isOnboarded) router.replace('/Auth/Home');
    if(!isSignedIn && isOnboarded) router.replace('/Auth/Login');
    if(!isSignedIn && !isOnboarded) router.replace('/');
  }, [isSignedIn]);
  return isLoaded ? <Slot /> : <ActivityIndicator  style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>
}
export default function Layout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  
  if (!fontsLoaded ) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache} >
      <ToastProviderWrapper>
        <InitialLayout />
      </ToastProviderWrapper>
    </ClerkProvider>
  );
}
