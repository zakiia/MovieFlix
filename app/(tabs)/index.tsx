import MovieCard from "@/component/MovieCard";
import SearchBar from "@/component/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/Services/api";
import { getTrendingMovies } from "@/Services/appwrite";
import useFetch from "@/Services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

if (__DEV__) {
  console.log("Development mode enabled");
} else {
  console.log("Production mode");
}

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError || trendingError ? (
          <Text>Error: {moviesError?.message || trendingError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
              // value=""
              // onChangeText={() => {}}
            />

            {trendingMovies && (
              <View className="mt-10">
                <Text className=" text-lg text-white font-bold mt-5 mb-3">
                  Trending Movies
                </Text>
              </View>
            )}

            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                scrollEnabled={false}
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

//API Read Access Token
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzRhOGUxODg1ZWZkOTliNTc2MDU3NjU5MjU5YjEwMiIsIm5iZiI6MTc0NjgxMTQ2NS4xOTM5OTk4LCJzdWIiOiI2ODFlM2E0OTMwZmY2N2I2ODU2YzZiNDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dXl0dqsmJ8xzYLF8XVvoDcw00D1sSIn9HbbkvHzSNBI

//API Key
//e74a8e1885efd99b576057659259b102
