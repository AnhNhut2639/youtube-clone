import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { categories } from "../constant";

export function HomeScreen() {
  const [activedCategory, setActiveCategory] = useState("All");
  return (
    <View style={{ backgroundColor: themeColors.bg }} className="flex-1">
      {/* logo, icon area */}
      <SafeAreaView className="flex-row justify-between mx-4 mt-8">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../assets/icons/youtubeIcon.png")}
            className="h-7 w-10"
          />
          <Text className="text-white font-semibold text-xl tracking-tighter">
            Youtube
          </Text>
        </View>
        <View className="flex-row items-center space-x-3">
          <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-7 w-7 rounded-full"
          />
        </View>
      </SafeAreaView>
      {/* end logo, icon area */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* categories */}
        <View className="py-2 pb-5">
          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category, index) => {
              let isActived = category === activedCategory;
              let textClass = isActived ? "text-black" : "text-white";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(category)}
                  key={index}
                  style={{
                    backgroundColor: isActived
                      ? "white"
                      : "rgba(255,255,255,0.1)",
                  }}
                  className="rounded-md p-1 px-3 mr-2"
                >
                  <Text className={textClass}>{category}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* end categories */}
      </ScrollView>
    </View>
  );
}
