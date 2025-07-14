import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function SSOCallbackScreen() {
  const router = useRouter();
  const { isLoaded } = useAuth();

  useEffect(() => {
    const handleSSOCallback = async () => {
      try {
        // Clerk auto-restores session; nothing to extract manually
        if (isLoaded) {
          router.replace("/"); // ✅ Go to Home after login
        }
      } catch (err) {
        console.error("SSO Callback error:", err);
      }
    };

    handleSSOCallback();
  }, [isLoaded]);

  return null; // Or <ActivityIndicator />
}
