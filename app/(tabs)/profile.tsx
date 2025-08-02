import { icons } from "@/constants/icons";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@clerk/clerk-expo";
import { useQuery } from "convex/react";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const { signOut, userId } = useAuth();
  const currentUser = useQuery(
    api.users.getUserByClerkId,
    userId ? { clerkId: userId } : "skip"
  );

  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Text className="text-gray-300 text-2xl">
          Name: {currentUser?.fullname}
        </Text>

        <Image source={{ uri: currentUser?.image }} className="size-20" />
        <Text className="text-gray-500 text-xl">
          username : {currentUser?.username}
        </Text>
        <Text className="text-gray-500 text-xl">
          email : {currentUser?.email}
        </Text>
        {/* <TouchableOpacity onPress={() => signOut()}>
          <Text className="text-gray-500 text-base"> SignOut</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          className="absolute bottom-40 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
          onPress={() => {
            router.back();
            signOut();
          }}
        >
          <Image
            source={icons.arrow}
            className="size-5 mr-1 mt-0.5 rotate-180"
            tintColor="#fff"
          />
          <Text className="text-white font-semibold text-base">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
