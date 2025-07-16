import { icons } from "@/constants/icons";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const { signOut } = useAuth();

  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#Fff" />
        <Text className="text-gray-500 text-base">Profile</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Text className="text-gray-500 text-base"> SignOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
