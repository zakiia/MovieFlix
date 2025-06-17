import SearchBar from "@/component/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();
  // @ts-ignore
  // @ts-ignore
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <View className="flex-1 mt-5">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}

//API Read Access Token
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzRhOGUxODg1ZWZkOTliNTc2MDU3NjU5MjU5YjEwMiIsIm5iZiI6MTc0NjgxMTQ2NS4xOTM5OTk4LCJzdWIiOiI2ODFlM2E0OTMwZmY2N2I2ODU2YzZiNDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dXl0dqsmJ8xzYLF8XVvoDcw00D1sSIn9HbbkvHzSNBI

//API Key
//e74a8e1885efd99b576057659259b102
