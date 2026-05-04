import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View } from "react-native";
// Evitar que se oculte automaticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        useFonts({
          NunitoBold: require("../../assets/font/Nunito-Bold.ttf"),
          NunitoItalic: require("../../assets/font/Nunito-Italic-VariableFont_wght.ttf"),
          NunitoLight: require("../../assets/font/Nunito-Light.ttf"),
          NunitoRegular: require("../../assets/font/Nunito-Regular.ttf"),
          NunitoSemiBold: require("../../assets/font/Nunito-SemiBold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

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
