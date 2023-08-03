import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox, View, Text } from "react-native";
import { HomeScreen } from "../screens/HomeScreen";
import { LibrariesScreen } from "../screens/LibrariesScreen";
import { PostScreen } from "../screens/PostScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ShortsScreen } from "../screens/ShortsScreen";
// SVG
import HomeSVG from "../assets/icons/home.svg";
import HomeSVGActive from "../assets/icons/homeActived.svg";
import LibrariesSVG from "../assets/icons/libraries.svg";
import LibrariesSVGActive from "../assets/icons/librariesActived.svg";
import Plus from "../assets/icons/plus.svg";
import RegisterSVG from "../assets/icons/register.svg";
import RegisterSVGActive from "../assets/icons/registerActived.svg";
import ShortSVG from "../assets/icons/shorts.svg";
import ShortSVGActive from "../assets/icons/shortsActived.svg";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator> */}
      {/*------------ Bottom Tabs --------- */}

      <Tabs.Navigator
        initialRouteName={HomeScreen}
        // screenOptions={{
        //   tabBarActiveTintColor: "red",
        //   tabBarInactiveTintColor: "purple",
        // }}
      >
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? <HomeSVGActive /> : <HomeSVG />;
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              return focused ? <ShortSVGActive /> : <ShortSVG />;
            },
          }}
          name="Shorts"
          component={ShortsScreen}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => {
              return (
                <View className="mt-2">
                  <Text>
                    <Plus height="35px" width="35px" />
                  </Text>
                </View>
              );
            },
          }}
          name="Post"
          component={PostScreen}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? <RegisterSVGActive /> : <RegisterSVG />;
            },
          }}
          name="Register"
          component={RegisterScreen}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? <LibrariesSVGActive /> : <LibrariesSVG />;
            },
          }}
          name="Libraries"
          component={LibrariesScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
