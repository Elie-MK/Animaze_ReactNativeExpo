import { View, Text, SafeAreaView, Pressable, StatusBar } from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../Screens/home/HomeScreen";
import Films from "../Screens/home/Films"
import Series from "../Screens/home/Series"
import { Color } from "../utilities/Color";
import { Searchbar } from "react-native-paper";
import { Entypo, Feather } from '@expo/vector-icons'


const topNavigation = () => {
  const Top = createMaterialTopTabNavigator();
  const [show, setShow] = useState(false);

  return (
    <>
      <SafeAreaView style={{ marginLeft: 25 }}>
        <View style={{ flexDirection: "row", gap: "200%" }}>
          <View>
            <Text style={{ color: Color.primary.one, fontSize: 25 }}>
              Animaze
            </Text>
          </View>
          <Pressable onPress={() => setShow(!show)}>
              <View>
                <Feather name="search" color={"white"} size={30} />
              </View>
          </Pressable>
        </View>
      </SafeAreaView>
      <Top.Navigator
      style={{ marginLeft: 5 }}
        sceneContainerStyle={{ backgroundColor: Color.primary.three }}
        initialRouteName="index"
        screenOptions={{
          tabBarIndicatorContainerStyle :{
            backgroundColor: Color.primary.three,
          },
          tabBarLabelStyle:{
            color:Color.primary.Four,
          },
          tabBarIndicatorStyle:{
            backgroundColor:Color.primary.one,
          }
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

export default topNavigation;
