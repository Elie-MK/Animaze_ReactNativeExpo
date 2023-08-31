import React from "react";
import { useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Color } from "../utilities/Color";

const CardGenres = ({title, imageBack, nav}) => {
  const theme = useColorScheme();

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
            <Text style={{ fontSize: 25, fontWeight: "bold", color: theme === "dark" ? Color.primary.Four : Color.primary.three }}>
              {title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CardGenres;
