import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { categories, shortVideos } from "../constant";
import ShortVideoCard from "../components/shortVideoCard";
import VideoCard from "../components/videoCard";
import { fetchTrendingVideos } from "../api/youtube";

export function HomeScreen() {
  const [activedCategory, setActiveCategory] = useState("All");
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const data = await fetchTrendingVideos();
    setVideos(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ backgroundColor: themeColors.bg }} className="flex-1">
      <StatusBar />
      {/* ---------- Logo, icon area ----------- */}
      <SafeAreaView className="flex-row justify-between mx-4 mt-5">
        <View className="flex-row items-center space-x-1 mb-3">
          <Image
            source={require("../assets/icons/youtubeIcon.png")}
            className="h-7 w-10"
          />
          <Text className="text-white font-semibold text-xl tracking-tighter">
            YouTube
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
      {/* ----------End logo, icon area ----------- */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* ---------- Categories ----------- */}
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
        {/* ---------- End Categories ----------- */}

        {/* ---------- Suggest ----------- */}

        {/* <VideoCard video={videos[4]} /> */}

        {/* ---------- End Suggest ----------- */}

        {/* ---------- Short videos ----------- */}
        <View className="mt-2 py-5 space-y-3 border-b-zinc-700 border-t-zinc-700 border-4 border-l-0 border-r-0">
          <View className="mx-4 flex-row items-center space-x-2">
            <Image
              source={require("../assets/icons/shortsIcon.png")}
              className="h-5 w-6"
            />
            <Text className="text-white font-semibold text-lg tracking-tighter">
              Shorts
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4"
          >
            {shortVideos.map((item, index) => (
              <ShortVideoCard item={item} key={index} />
            ))}
          </ScrollView>
        </View>
        {/* ---------- End short videos ----------- */}

        {/* ---------- Videos ----------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {videos.map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
        </ScrollView>
        {/* ---------- End videos ----------- */}
      </ScrollView>
    </View>
  );
}
