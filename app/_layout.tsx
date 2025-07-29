import InitialLayout from "@/component/InitialLayout";

import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { StatusBar } from "react-native";
import "./globals.css";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
      <StatusBar hidden />
      <InitialLayout />
    </ClerkAndConvexProvider>
  );
}
