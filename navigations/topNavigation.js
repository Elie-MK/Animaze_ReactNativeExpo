import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../Screens/home/HomeScreen";
import Films from "../Screens/home/Films";
import Series from "../Screens/home/Series";
import { Color } from "../utilities/Color";
import { Searchbar } from "react-native-paper";
import { Entypo, Feather } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const TopNavigation = ({ navigation }) => {
  const Top = createMaterialTopTabNavigator();
  const [show, setShow] = useState(false);
  const theme = useColorScheme();

  return (
    <>
      <SafeAreaView style={{ marginLeft: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 25,
          }}
        >
          <View>
            <Text style={{ color: Color.primary.one, fontSize: 25 }}>
              Animaze
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("search")}>
            <View>
              <Feather name="search" color={theme === "dark" ? Color.primary.Four : Color.primary.three} size={30} />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
      <Top.Navigator
        style={{ marginLeft: 5 }}
        sceneContainerStyle={{
          backgroundColor:
            theme === "dark" ? Color.primary.three : Color.primary.Four,
        }}
        initialRouteName="index"
        screenOptions={{
          tabBarIndicatorContainerStyle: {
            backgroundColor:
              theme === "dark" ? Color.primary.three : Color.primary.Four,
          },
          tabBarLabelStyle: {
            color:
              Color.theme === "dark" ? Color.primary.three : Color.primary.one,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Color.primary.one,
          },
        }}
      >
        <Top.Screen
          name="index"
          component={HomeScreen}
          options={{
            tabBarLabel: "All Categories",
          }}
        />
        <Top.Screen
          name="films"
          component={Films}
          options={{
            tabBarLabel: "Films",
          }}
        />
        <Top.Screen
          name="series"
          component={Series}
          options={{
            tabBarLabel: "Series",
          }}
        />
      </Top.Navigator>
    </>
  );
};

export default TopNavigation;
