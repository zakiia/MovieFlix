import InitialLayout from "@/component/InitialLayout";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { StatusBar } from "react-native";
import "./globals.css";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <>
        <StatusBar hidden />
        <InitialLayout />
      </>
    </ClerkProvider>
  );
}
