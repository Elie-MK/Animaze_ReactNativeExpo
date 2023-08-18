import React from "react";
import { TouchableOpacity } from "react-native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const CardGenres = ({title, imageBack, nav}) => {
  return (
    <View >
      <TouchableOpacity onPress={nav}>
        <ImageBackground
          style={{ marginRight:10 }}
          imageStyle={{
            borderRadius: 10,
            height: 100,
            width: 175,
            opacity: 0.5,
          }}
          source={{
            uri: imageBack,
          }}
        >
          <View style={{ width:175, height:100, alignItems:"center", marginTop:30 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              {title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CardGenres;
