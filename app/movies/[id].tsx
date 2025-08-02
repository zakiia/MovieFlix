import { icons } from "@/constants/icons";
import { api } from "@/convex/_generated/api";
import { fetchMovieDetails } from "@/Services/api";
import useFetch from "@/Services/useFetch";
import { useMutation } from "convex/react";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();
  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  const toggleBookmark = useMutation(api.bookmarks.toggleBookmark);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleBookmark = async () => {
    if (!movie) return;

    try {
      const newIsBookmarked = await toggleBookmark({
        tmdbId: movie.id,
        title: movie.title,
        posterPath: movie.poster_path ?? "",
        releaseDate: movie.release_date ?? "",
        overview: movie.overview ?? "",
      });
      setIsBookmarked(newIsBookmarked);
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
    }
  };

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>

          {/* <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
          </View> */}

          <View className="flex-row items-center justify-between w-full mt-2">
            {/* Left side: release year & runtime */}
            <View className="flex-row items-center gap-x-2">
              <Text className="text-light-200 text-sm">
                {movie?.release_date?.split("-")[0]}
              </Text>
              <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
            </View>

            {/* Right side: save icon */}
            <TouchableOpacity onPress={handleBookmark}>
              <Image
                source={isBookmarked ? icons.saveFilled : icons.save}
                className="size-8"
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white font-bold text-sm">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-light-200 text-sm">
              ({movie?.vote_count} votes)
            </Text>
          </View>
          {movie?.overview && (
            <MovieInfo label="Overview" value={movie?.overview} />
          )}
          {/* <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join("-") || "NA"}
          /> */}
          <MovieInfo
            label="Production Companies"
            value={
              Array.isArray(movie?.production_companies)
                ? movie.production_companies.map((c) => c.name).join(" - ")
                : "N/A"
            }
          />

          <View className="flex flex-row justify-between w-1/2">
            {movie?.budget && (
              <MovieInfo
                label="Budget"
                value={`$${movie?.budget / 1_000_000} million`}
              />
            )}
            {movie?.revenue && (
              <MovieInfo
                label="Revenue"
                value={`${Math.round(movie?.revenue) / 1_000_000}`}
              />
            )}
          </View>
          {/* <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies.map((c) => c.name).join("-") || "N/A"
            }
          /> */}

          <MovieInfo
            label="Production Companies"
            value={
              Array.isArray(movie?.production_companies)
                ? movie.production_companies.map((c) => c.name).join(" - ")
                : "N/A"
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
