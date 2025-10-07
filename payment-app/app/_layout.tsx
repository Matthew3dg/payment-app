import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShown: false,
          contentStyle: styles.stackContent,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="notifications/index" />
      </Stack>
    </SafeAreaProvider>
  );
}
