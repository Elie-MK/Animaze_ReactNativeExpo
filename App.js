import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./Pages/Welcome";
import Login from "./Screens/Auth/Login";
import Register from "./Screens/Auth/Register.js";
import TabNavigation from "./navigations/tabNavigation";
import Description from "./Pages/Description";
import { VideoProvider } from "./Components/VideoContext";
import VideoPlayerModal from "./Components/VideoPlayerModal";
import { Provider } from "react-redux";
import { store } from "./redux/redux";
import Categories from "./Pages/Categories";
import Search from "./Pages/Search";
import Editprofile from "./Pages/profileEdit/Editprofile";
import Language from "./Pages/profileEdit/Language/Language";
import { StatusBar, useColorScheme } from "react-native";
import { Color } from "./utilities/Color";




const Stack = createStackNavigator();

export default function App() {
  const theme = useColorScheme();

  return (
    <Provider store={store}>
    <VideoProvider>
    <NavigationContainer >
    <StatusBar barStyle={theme === "dark" ? Color.primary.three : Color.primary.Four} />

      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="welcome" component={Welcome} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="login" component={Login} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="register" component={Register} options={{
          headerShown:false
        }}/>
        <Stack.Screen name=" " component={TabNavigation} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="description" component={Description} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="videoplayer" component={VideoPlayerModal} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="categories" component={Categories} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="search" component={Search} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="editprofile" component={Editprofile} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="editlanguage" component={Language} options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </VideoProvider>
    </Provider>
  );
}
