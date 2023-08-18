import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../utilities/Color";
import { Button, Divider, Menu } from "react-native-paper";

const CardFav = ({ navSup, navDesc, navPlay, img,title,pressdelete }) => {
  const [visible, setVisible] = useState(false);
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
            <Text style={{ fontSize: 25, color: Color.primary.Four }}>
              {title}
            </Text>
            <Text style={{ fontSize: 10, color: Color.primary.Four }}>
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
                    color={"white"}
                  />
                </Pressable>
              }
              anchorPosition="bottom"
              contentStyle={{ backgroundColor: Color.primary.one }}
            >
              <Menu.Item
                titleStyle={{ color: Color.primary.Four }}
                onPress={navSup}
                title="Delete"
              />
              <Divider />
              <Menu.Item
                titleStyle={{ color: Color.primary.Four }}
                onPress={navDesc}
                title="View Description"
              />
              <Divider />
              <Menu.Item
                titleStyle={{ color: Color.primary.Four }}
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
