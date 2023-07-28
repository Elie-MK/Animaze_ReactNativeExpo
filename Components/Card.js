import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Color } from "../utilities/Color";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";

const Card = ({image, animeTitle, navigation }) => {
  const [fav, setFav] = useState(false);

  return (
    <View style={{ marginLeft:7, marginRight:5 }}>
      <TouchableOpacity onPress={navigation}>
      <Image
        source={{
          uri: image,
          width: 150,
          height: 200,
        }}
        style={{ borderRadius: 10 }}
      />
      <Text style={{ color: Color.primary.Four, padding: 5 }}>{animeTitle}</Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => setFav(!fav)}
        style={{
          backgroundColor: Color.primary.two,
          padding: 5,
          position: "absolute",
          marginLeft: 122,
          marginTop: 5,
          borderRadius: 50,
        }}
      >
        {fav ? (
          <FontAwesome name="bookmark" size={20} color={Color.primary.one} />
        ) : (
          <FontAwesome name="bookmark-o" size={20} color={Color.primary.Four} />
        )}
      </Pressable>
    </View>
  );
};

export default Card;
