import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mylist from "../Screens/mylist/Mylist";
import Download from "../Screens/download/Download";
import Genres from "../Screens/genres/Genres";
import Account from "../Screens/account/Account";
import { AntDesign, Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { Color } from "../utilities/Color";
import { useColorScheme } from "react-native";
import topNavigation from "./topNavigation";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const theme = useColorScheme()
  return (
    <Tab.Navigator sceneContainerStyle={{
      backgroundColor: theme === "dark" ? Color.primary.three : Color.primary.Four
    }} screenOptions={{
      tabBarActiveTintColor:Color.primary.one,
      tabBarStyle:{
        backgroundColor:theme === "dark" ? Color.primary.three : Color.primary.Four
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
