import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
// Evitar que se oculte automaticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    NunitoBold: require("../../assets/font/Nunito-Bold.ttf"),
    NunitoItalic: require("../../assets/font/Nunito-Italic-VariableFont_wght.ttf"),
    NunitoLight: require("../../assets/font/Nunito-Light.ttf"),
    NunitoRegular: require("../../assets/font/Nunito-Regular.ttf"),
    NunitoSemiBold: require("../../assets/font/Nunito-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
