import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  Image,
  Pressable
} from "react-native";
import React, { useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import { useRef } from "react";
import { useVideoContext } from "./VideoContext";
import { setStatusBarHidden } from "expo-status-bar";
import VideoPlayer from "expo-video-player";
import VideoPlayerModal from "./VideoPlayerModal";

const EpisodeItem = ({ titleEpisode, img,nav, press,videoLink }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentVideo, setCurrentVideo } = useVideoContext();
  const [inFullscreen2, setInFullsreen2] = useState(false);
  const [showmodal, setShowModal] = useState(false);

  // const handlePlayPause = async () => {
  //   if (videoRef.current) {
  //     if (currentVideo && currentVideo !== videoRef.current) {
  //       await currentVideo.pauseAsync();
  //     }
  //     if (!isPlaying) {
  //       await videoRef.current.playAsync();
  //     }
  //     setCurrentVideo(isPlaying ? null : videoRef.current);
  //     setIsPlaying(!isPlaying);
  //   }
  // };
  return (
    <View style={{ marginTop: 5 }}>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <TouchableOpacity onPress={nav}>
         <Image source={{
          uri:img,
          width:150,
          height:80
         }} />
        </TouchableOpacity>
        <View>
          <Text style={{ color: "white", fontSize: 15, width:250 }}>{titleEpisode}</Text>
          <View style={{ marginLeft:150, marginTop: 10 }}>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Pressable onPress={press}>
              <Feather name="download" color={"white"} size={20} />
              </Pressable>
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
