import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../utilities/Color";
import { Button, Divider, Menu } from "react-native-paper";
import { useColorScheme } from "react-native";

const CardFav = ({ navSup, navDesc, navPlay, img,title,pressdelete }) => {
  const [visible, setVisible] = useState(false);
  const theme = useColorScheme();

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: img,
              width: 100,
              height: 130,
            }}
            style={{ borderRadius: 10 }}
          />

          <View>
            <Text style={{ fontSize: 25, color: theme === "dark" ? Color.primary.Four : Color.primary.three}}>
              {title}
            </Text>
            <Text style={{ fontSize: 10, color: theme === "dark" ? Color.primary.Four : Color.primary.three}}>
              Start Watching: S1E1
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Pressable onPress={pressdelete}>
            <FontAwesome name="bookmark" color={Color.primary.one} size={20} />
          </Pressable>
          <Pressable onPress={() => setVisible(!visible)}>
            <Menu
              visible={visible}
              onDismiss={() => setVisible(!visible)}
              anchor={
                <Pressable onPress={() => setVisible(!visible)}>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={20}
                    color={theme === "dark" ? Color.primary.Four : Color.primary.three }
                  />
                </Pressable>
              }
              anchorPosition="bottom"
              contentStyle={{ backgroundColor: Color.primary.one }}
            >
              <Menu.Item
                titleStyle={{ color: theme === "dark" ? Color.primary.Four : Color.primary.three}}
                onPress={navSup}
                title="Delete"
              />
              <Divider />
              <Menu.Item
                titleStyle={{ color: theme === "dark" ? Color.primary.Four : Color.primary.three}}
                onPress={navDesc}
                title="View Description"
              />
              <Divider />
              <Menu.Item
                titleStyle={{ color: theme === "dark" ? Color.primary.Four : Color.primary.three}}
                onPress={navPlay}
                title="Play"
              />
            </Menu>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFav;
