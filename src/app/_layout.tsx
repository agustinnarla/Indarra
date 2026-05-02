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
        setTimeout(() => {}, 2000);
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
