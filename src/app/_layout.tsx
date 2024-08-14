import ToastProviderWrapper from "@/components/Toasty";
import { useAuth } from "@/shared/hooks/useAuth";
import { GetItem } from "@/shared/storage";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
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
import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  const { isLoading: authLoading, isAuthenticated } = useAuth();
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await GetItem("isOnboarded");
        setIsOnboarded(!!value);
      } catch (error) {
        console.error("Error fetching onboarding status:", error);
      }
    };
    fetchData();
  }, []);

  if (!fontsLoaded || authLoading || isOnboarded === null) {
    return <ActivityIndicator size="large" color="#000" />;
  }
  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
  <ClerkProvider publishableKey={publishableKey}>
    <ToastProviderWrapper>
      {!isOnboarded ? (
        <ClerkLoaded>
          <Slot />
        </ClerkLoaded>
      ) : isAuthenticated ? (
        <ClerkLoaded>
          <Slot />
        </ClerkLoaded>
      ) : (
        <ClerkLoaded>
          <Slot />
        </ClerkLoaded>
      )}
    </ToastProviderWrapper>
    </ClerkProvider>
  );
}
