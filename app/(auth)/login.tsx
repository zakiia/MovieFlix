import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View className="flex-1 bg-primary relative">
      <Image source={images.bg} className="absolute w-full z-0" />
      <View className="flex-1 justify-center items-center px-10 z-10">
        <View className="items-center mb-[-10px]">
          <Image
            source={icons.logo}
            className="w-40 h-40 mb-2"
            resizeMode="contain"
          />
          <Text className="text-[42px] font-bold text-gray-500 ">
            MovieFlix
          </Text>
          <Text className="text-gray-500"> Do Not Miss anything</Text>
        </View>

        <Image
          source={require("../../assets/images/auth_bg.png")}
          className="w-[280px] h-[280px] max-h-[280px] mt-20"
          resizeMode="cover"
        />
      </View>

      <View className="w-full mb-20 px-6 pb-10 items-center">
        <TouchableOpacity
          className="flex-row items-center justify-center bg-gray-500 py-4 px-6 rounded-[14px] mb-5 w-full"
          style={{
            maxWidth: 300,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 5,
          }}
          onPress={() => console.log("Continue with Google")}
          activeOpacity={0.9}
        >
          <View className="w-6 h-6 justify-center items-center mr-3">
            <Image
              source={require("../../assets/images/google-logo.png")}
              className="size-10 mr-5"
            />
          </View>
          <Text className="text-base font-semibold text-surface">
            Continue with Google{" "}
          </Text>
        </TouchableOpacity>
        <Text className="text-center text-xs text-gray-500 max-w-[280px]">
          By, continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default Login;
