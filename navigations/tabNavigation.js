import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/home/HomeScreen";
import Mylist from "../Screens/mylist/Mylist";
import Download from "../Screens/download/Download";
import Genres from "../Screens/genres/Genres";
import Account from "../Screens/account/Account";
import { AntDesign, Entypo, Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { Color } from "../utilities/Color";
import topNavigation from "./topNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{
      backgroundColor:Color.primary.three
    }} screenOptions={{
      tabBarActiveTintColor:Color.primary.one,
      tabBarStyle:{
        backgroundColor:Color.primary.three,
      }
    }}>
      <Tab.Screen name="hometop" component={topNavigation} options={{
        tabBarLabel:"Home", 
        headerShown:false,
        tabBarIcon: ({color}) => (
          <SimpleLineIcons name="home" color={color} size={20} />
        ), 
      }} />
      <Tab.Screen name="mylist" component={Mylist} options={{
        tabBarLabel:"My list", 
        headerShown:false,
        tabBarIcon: ({color}) => (
          <FontAwesome name="bookmark-o" color={color} size={20} />
        ), 
      }} />
      <Tab.Screen name="download" component={Download} options={{
        tabBarLabel:"Download", 
        headerShown:false,
        tabBarIcon: ({color}) => (
          <Feather name="download" color={color} size={20} />
        ), 
      }} />
      <Tab.Screen name="genres" component={Genres} options={{
        tabBarLabel:"Genres", 
        headerShown:false,
        tabBarIcon: ({color}) => (
          <AntDesign name="appstore-o" color={color} size={20} />
        ), 
      }} />
      <Tab.Screen name="account" component={Account} options={{
        tabBarLabel:"Account", 
        headerShown:false,
        tabBarIcon: ({color}) => (
          <FontAwesome name="user-o" color={color} size={20} />
        ), 
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
