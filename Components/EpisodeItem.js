import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import { useRef } from "react";
import { useVideoContext } from "./VideoContext";
import { setStatusBarHidden } from "expo-status-bar";
import VideoPlayer from "expo-video-player";

const EpisodeItem = ({ titleEpisode, videoUri }) => {
  const videoRef = useRef(null);
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
  return (
    <View style={{ marginTop: 5 }}>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <TouchableOpacity onPress={handlePlayPause}>
          <VideoPlayer
            videoProps={{
              shouldPlay: false,
              resizeMode: ResizeMode.CONTAIN,
              source: {
                uri: videoUri,
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
              height: inFullscreen2 ? Dimensions.get("window").width : 80,
              width: inFullscreen2 ? Dimensions.get("window").height : 150,
            }}
          />
        </TouchableOpacity>

        <View>
          <Text style={{ color: "white", fontSize: 15 }}>{titleEpisode}</Text>
          <View style={{ alignItems: "flex-end", marginTop: 10 }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather name="download" color={"white"} size={20} />
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={20}
                color={"white"}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EpisodeItem;
