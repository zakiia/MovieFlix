// import { icons } from "@/constants/icons";
// import React from "react";
// import { Image, Text, View } from "react-native";

// const Saved = () => {
//   return (
//     <View className="bg-primary flex-1 px-10">
//       <View className="flex justify-center items-center flex-1 flex-col gap-5">
//         <Image source={icons.save} className="size-10" tintColor="#Fff" />
//         <Text className="text-gray-500 text-base">Saved</Text>
//       </View>
//     </View>
//   );
// };

// export default Saved;

import MovieCard from "@/component/MovieCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { FlatList, ScrollView, Text, View } from "react-native";

export default function Saved() {
  const bookmarkedMovies = useQuery(api.bookmarks.getBookmarkedMovies);

  const validBookmarks =
    bookmarkedMovies?.filter(
      (item): item is NonNullable<typeof item> => item !== null
    ) ?? [];

  if (validBookmarks.length === 0)
    return (
      <View className="bg-primary flex-1 px-10">
        <View className="flex justify-center items-center flex-1 flex-col gap-5">
          <Text className="text-gray-500 text-base">No Saved Post</Text>
        </View>
      </View>
    );

  const formatBookmarkToMovieCard = (item: any) => ({
    id: item.tmdbId,
    poster_path: item.posterPath,
    title: item.title,
    vote_average: item.voteAverage ?? 0,
    release_date: item.releaseDate,
  });

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Text className="text-lg text-white font-bold mt-32 mb-3 ">
          Saved Movies
        </Text>

        <FlatList
          scrollEnabled={false}
          data={validBookmarks}
          renderItem={({ item }) => (
            <MovieCard {...formatBookmarkToMovieCard(item)} />
          )}
          keyExtractor={(item) => item._id}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,
          }}
          className="mt-2 pb-32"
        />
      </ScrollView>
    </View>
  );
}
