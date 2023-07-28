import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Color } from "../utilities/Color";
import { Divider } from "@rneui/base";
import { Picker } from "@react-native-picker/picker";
import EpisodeItem from "../Components/EpisodeItem";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

const Description = ({ navigation, route }) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [dataEpisode, setDataEpisode] = useState([]);
  const { item } = route.params;
  // console.log(item);

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
  };

  useEffect(() => {
    setDataEpisode(item.animeSeasons[0].episodes);
  }, []);

  console.log(dataEpisode);
  return (
    <View style={{ backgroundColor: Color.primary.three, height: "100%" }}>
      <View>
        <Image
          resizeMode="cover"
          source={{
            uri: item.img,
            width: "100%",
            height: 300,
          }}
          style={{ borderRadius: 10 }}
        />
      </View>

      <View style={{ marginTop: 50, position: "absolute", marginLeft: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 280 }}>
          <Pressable
            style={{
              alignItems: "center",
              backgroundColor: Color.primary.Four,
              borderRadius: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="keyboard-arrow-left" size={40} />
          </Pressable>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View>
              <FontAwesome
                name="bookmark-o"
                size={30}
                color={Color.primary.Four}
              />
            </View>
            <View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color={Color.primary.Four}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 15, marginTop: 10, marginRight: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 25,
                color: Color.primary.one,
                fontWeight: "bold",
              }}
            >
              {item.titleAnime}
            </Text>
            <Text style={{ fontSize: 10, color: Color.primary.Four }}>
              Serie.{item.year}
            </Text>
          </View>
          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <FontAwesome name="star" size={20} color={"yellow"} />
              <FontAwesome name="star" size={20} color={"yellow"} />
              <FontAwesome name="star" size={20} color={"yellow"} />
              <FontAwesome name="star" size={20} color={"yellow"} />
              <FontAwesome name="star" size={20} color={"gray"} />
            </View>
            <Text style={{ color: Color.primary.Four }}>
              Average {item.star}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: Color.primary.Four,
              marginTop: 10,
              marginBottom: 10,
              textAlign: "justify",
            }}
          >
            {item.desc}
          </Text>
          <Divider />

          <View>
            <Text
              style={{
                color: Color.primary.Four,
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Episodes
            </Text>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={40}
                  color={Color.primary.Four}
                />
                <Text
                  style={{
                    color: Color.primary.Four,
                    padding: 10,
                    fontSize: 15,
                  }}
                >
                  Season {item.animeSeasons[0].id} :{" "}
                  {item.animeSeasons[0].titleSeason} (
                  {item.animeSeasons[0].numberEpisodes})
                </Text>
              </View>
              <Divider />
            </View>
          </View>
        </View>
      </View>
         
         {
            <FlatList
              data={dataEpisode}
              style={{flex:1, marginLeft:20}}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()} 
              renderItem={({ item }) => (
                <EpisodeItem
                  titleEpisode={item.titleEpisode}
                  videoUri={item.link}
                  img={item.img}
                />
              )}
            
            />
          }
    </View>
  );
};

export default Description;
