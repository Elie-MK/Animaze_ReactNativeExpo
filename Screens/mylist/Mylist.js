import * as ScreenOrientation from 'expo-screen-orientation'
import React, { useState } from 'react';
import { View, StyleSheet,  Text } from 'react-native';
import {ResizeMode } from 'expo-av';
import { SafeAreaView } from 'react-native';
import { setStatusBarHidden } from 'expo-status-bar'
import VideoPlayer from 'expo-video-player'
import { useRef } from 'react';
import { Dimensions } from 'react-native';



const Mylist = () => {
  const videoUri = "https://video.fontam.org/naruto.mp4"; 

  const [inFullscreen2, setInFullsreen2] = useState(false)
  const refVideo2 = useRef(null)

  const handlePlayPause = async () => {
    if (videoRef) {
      if (isPlaying) {
        await videoRef.pauseAsync();
      } else {
        await videoRef.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <SafeAreaView>
   
   

      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: videoUri,
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          videoBackgroundColor: 'black',
          height: inFullscreen2 ? Dimensions.get('window').width : 80,
          width: inFullscreen2 ? Dimensions.get('window').height : 150,
        }}
      />
    </SafeAreaView>
  )
}




export default Mylist