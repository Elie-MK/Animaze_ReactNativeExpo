import { View, Text, Animated, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import VideoPlayer from "expo-video-player";
import { Dimensions } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useRef } from "react";
import { useVideoContext } from "./VideoContext";
import { setStatusBarHidden } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { useState } from "react";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Color } from "../utilities/Color";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const VideoPlayerModal = ({ route, navigation }) => {
  const videoRef = useRef(null);
  const translationY = useRef(new Animated.Value(0)).current;
  const { item } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentVideo, setCurrentVideo } = useVideoContext();
  const [inFullscreen2, setInFullsreen2] = useState(false);

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (currentVideo && currentVideo !== videoRef.current) {
        await currentVideo.pauseAsync();
      }
      if (!isPlaying) {
        await videoRef.current.playAsync();
      }
      setCurrentVideo(isPlaying ? null : videoRef.current);
      setIsPlaying(!isPlaying);
    }
  };

  const handleGesture = Animated.event([{ nativeEvent: { translationY } }], {
    useNativeDriver: false,
  });

  const handleStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationY > 100) {
        navigation.goBack();
      } else {
        Animated.spring(translationY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    }
  };

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      
      <SafeAreaView>
      <Pressable onPress={()=>navigation.goBack()} style={{ marginLeft: 20, position:"absolute", zIndex:2, marginTop:60, padding: 5, backgroundColor:Color.primary.Four, width:40, borderRadius:20 }}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
        </Pressable>

      <PanGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={handleStateChange}
      >
      
        <Animated.View style={[{ transform: [{ translateY: translationY }] }]}>
             
          <TouchableOpacity onPress={handlePlayPause} style={{marginTop:-40}} >

            <VideoPlayer
              videoProps={{
                shouldPlay: true,
                resizeMode: ResizeMode.CONTAIN,
                source: {
                  uri: item.link,
                },
                ref: videoRef,
              }}
              fullscreen={{
                inFullscreen: inFullscreen2,
                enterFullscreen: async () => {
                  setStatusBarHidden(true, "fade");
                  setInFullsreen2(!inFullscreen2);
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                  );
                  videoRef.current.setStatusAsync({
                    shouldPlay: true,
                  });
                },
                exitFullscreen: async () => {
                  setStatusBarHidden(false, "fade");
                  setInFullsreen2(!inFullscreen2);
                  await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.DEFAULT
                  );
                },
              }}
              style={{
                videoBackgroundColor: "black",
                height: inFullscreen2 ? 850 : 800,
                width: inFullscreen2
                  ? Dimensions.get("window").width
                  : Dimensions.get("window").height,
              }}
            />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
      </SafeAreaView>
    </View>
  );
};

export default VideoPlayerModal;
