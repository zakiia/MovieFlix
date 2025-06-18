// import MovieCard from "@/component/MovieCard";
// import SearchBar from "@/component/SearchBar";
// import { icons } from "@/constants/icons";
// import { images } from "@/constants/images";
// import { fetchMovies } from "@/Services/api";
// import useFetch from "@/Services/useFetch";
// import React, { useState } from "react";
// import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const {
//     data: movies,
//     loading,
//     error,
//   } = useFetch(
//     () =>
//       fetchMovies({
//         query: searchQuery,
//       }),
//     false
//   );

//   return (
//     <View className="flex-1 bg-primary">
//       <Image
//         source={images.bg}
//         className="flex-1 absolute w-full z-0"
//         resizeMode="cover"
//       />

//       <FlatList
//         scrollEnabled={false}
//         data={movies}
//         renderItem={({ item }) => <MovieCard {...item} />}
//         keyExtractor={(item) => item.id.toString()}
//         className="px-5"
//         numColumns={3}
//         columnWrapperStyle={{
//           justifyContent: "center",
//           gap: 16,
//           marginVertical: 16,
//         }}
//         contentContainerStyle={{ paddingBottom: 100 }}
//         ListHeaderComponent={
//           <>
//             <View className="w-full flex-row justify-center mt-20 items-center">
//               <Image source={icons.logo} className="w-12 h-10" />
//             </View>

//             <View className="my-5">
//               <SearchBar placeholder="Search movies..." />
//             </View>
//             {loading && (
//               <ActivityIndicator
//                 size="large"
//                 color="#0000ff"
//                 className="my-3"
//               />
//             )}

//             {error && (
//               <Text className="text-red-500 px-5 my3">
//                 Error: {error.message}
//               </Text>
//             )}

//             {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
//               <Text className="text-xl text-white font-bold">
//                 Search result for{" "}
//                 <Text className="text-accent">{searchQuery}</Text>
//               </Text>
//             )}
//           </>
//         }
//       />
//     </View>
//   );
// };

// export default Search;

import MovieCard from "@/component/MovieCard";
import SearchBar from "@/component/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/Services/api";
import useFetch from "@/Services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  const filteredMovies =
    movies?.filter((movie: { title: string }) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || movies;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     refetch(); // Trigger refetch after a short delay to debounce
  //   }, 300); // 300ms debounce to limit API calls
  //   return () => clearTimeout(timer); // Cleanup timer
  // }, [searchQuery, refetch]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        scrollEnabled={false}
        data={filteredMovies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className="my-5">
              <SearchBar
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading &&
              !error &&
              searchQuery.trim() &&
              filteredMovies?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search result for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim() ? "No movies found" : "Search for a movie"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
