import { View, Text, Pressable, Modal, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Color } from "../../utilities/Color";
import { Image } from "react-native";
import {
  Avatar,
  Badge,
  BottomSheet,
  Button,
  Divider,
  Switch,
} from "@rneui/base";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

const Account = ({ navigation, route }) => {
  const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState("");
  const state = useSelector((state) => state.language);

  const theme = useColorScheme();
  const handleLogout = () => {
    try {
      AsyncStorage.removeItem("jwtToken");
      navigation.navigate("welcome");
      setVisible(!visible);
    } catch (error) {
    }
  };

  const getLanguage = async () => {
    try {
      const getLang = await AsyncStorage.getItem("lang");
      setLang(getLang);
    } catch (error) {
    }
  };
  useEffect(() => {
    getLanguage();
  }, [navigation]);

  // const darMode = ()=> {
    
  // }



  return (
    <SafeAreaView style={{ marginLeft: 25, marginRight: 25 }}>

      <Text style={{ color: Color.primary.one, fontSize: 30 }}>Account</Text>
      <View style={{ marginTop: 25 }}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
          }}
        />
        <Badge
          badgeStyle={{ backgroundColor: Color.primary.one }}
          value={
            <FontAwesome
              name="pencil-square-o"
              size={10}
              color={Color.primary.Four}
            />
          }
          containerStyle={{ position: "absolute", top: 45, left: 55 }}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("editprofile")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text
              style={{
                color:
                  theme === "dark" ? Color.primary.Four : Color.primary.two,
                fontSize: 20,
              }}
            >
              Edit profile
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={theme === "dark" ? Color.primary.Four : Color.primary.two}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
              Notification
            </Text>
            <Switch
              value={checked}
              onValueChange={(value) => setChecked(value)}
              color={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
              Download
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={theme === "dark" ? Color.primary.Four : Color.primary.two}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("editlanguage")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
              Language
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
                {
                  state.length < 1 ? lang : state
                }
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme === "dark" ? Color.primary.Four : Color.primary.two}
              />
            </View>
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
              Dark Mode
            </Text>
            <Switch
              value={theme === "dark" ? true : false}
              onValueChange={theme === "dark" ? true : false}
              color={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
            Security
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={theme === "dark" ? Color.primary.Four : Color.primary.two}
          />
        </View>
        <Divider style={{ opacity: 0.4 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
            Help Center
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={theme === "dark" ? Color.primary.Four : Color.primary.two}
          />
        </View>
        <Divider style={{ opacity: 0.4 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.two, fontSize: 20 }}>
            Privacy policy
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={theme === "dark" ? Color.primary.Four : Color.primary.two}
          />
        </View>
        <Divider style={{ opacity: 0.4 }} />
      </TouchableOpacity>

      <Pressable
        onPress={() => setVisible(!visible)}
        style={{ alignItems: "center", marginTop: 25 }}
      >
        <Text style={{ color: Color.primary.one, fontSize: 25 }}>Logout</Text>
      </Pressable>

      <BottomSheet
        isVisible={visible}
        onBackdropPress={() => setVisible(!visible)}
      >
        <View style={{ backgroundColor: Color.primary.three, height: 290 }}>
          <View style={{ marginLeft: 25, marginRight: 25 }}>
            <View
              style={{ alignItems: "center", marginTop: 25, marginBottom: 25 }}
            >
              <Text style={{ color: Color.primary.one, fontSize: 25 }}>
                Logout
              </Text>
            </View>
            <Divider style={{ opacity: 0.5 }} color={Color.secondary.two} />
            <View style={{ alignItems: "center", marginTop: 50 }}>
              <Text style={{ color: Color.primary.Four, fontSize: 20 }}>
                Are you sure you want to log out ?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Button
                title="cancel"
                onPress={() => setVisible(!visible)}
                buttonStyle={{
                  backgroundColor: "#333333",
                  width: 150,
                  padding: 15,
                  borderRadius: 20,
                }}
              />
              <Button
                title="Yes Logout"
                onPress={handleLogout}
                buttonStyle={{
                  backgroundColor: Color.primary.one,
                  width: 150,
                  padding: 15,
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Account;


