import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { themeColors } from "../theme";

export function HomeScreen() {
  return (
    <View style={{ backgroundColor: themeColors.bg }} className="flex-1">
      <SafeAreaView className="flex-row justify-between mx-4">
        <Text className="text-white">HomeScreen</Text>
      </SafeAreaView>
    </View>
  );
}
