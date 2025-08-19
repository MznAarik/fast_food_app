import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
    
  }, [fontsLoaded, error]);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
