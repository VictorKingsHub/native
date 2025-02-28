import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "yellow",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home Here We Are" }} />
    </Stack>
  );
}
