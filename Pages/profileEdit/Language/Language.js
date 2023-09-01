import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Color } from "../../../utilities/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckBox, Divider } from "@rneui/base";
import { useVideoContext } from "../../../Components/VideoContext";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../../redux/redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

const Language = ({navigation}) => {
  const {currentVideo, setCurrentVideo}=useVideoContext("English")
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.language)

  useEffect(()=>{
    dispatch(changeLanguage(currentVideo));
    saveLanguage()
  },)

 const saveLanguage = async ()=>{
      try {
        await AsyncStorage.setItem('lang', state);
      } catch (error) {
        console.log("Data Language not save");
      }
  }
  const theme = useColorScheme();



  // console.log(state);
  return (
    <SafeAreaView style={{ backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four, flex: 1 }}>
      <View style={{ marginLeft: 25, marginRight: 25 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
         <Pressable onPress={()=>navigation.goBack()}>
         <MaterialIcons
            name="keyboard-arrow-left"
            size={40}
            color={theme === "dark" ? Color.primary.Four :Color.primary.three}
          />
         </Pressable>
          <Text style={{ color: Color.primary.one, fontSize: 25 }}>
            Language
          </Text>
        </View>
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
            <Text style={{ color: theme === "dark" ? Color.primary.Four :Color.primary.three, fontSize: 20 }}>
              English
            </Text>
            <CheckBox
              checked={currentVideo === "English"}
              onPress={()=>setCurrentVideo("English")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four,
              }}
              uncheckedColor={Color.primary.one}
              checkedColor={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
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
            <Text style={{ color: theme === "dark" ? Color.primary.Four :Color.primary.three, fontSize: 20 }}>
              Arabic
            </Text>
            <CheckBox
              checked={currentVideo === "Arabic"}
              onPress={() => setCurrentVideo("Arabic")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four,
              }}
              uncheckedColor={Color.primary.one}
              checkedColor={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
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
            <Text style={{ color: theme === "dark" ? Color.primary.Four :Color.primary.three, fontSize: 20 }}>
              Deutsch
            </Text>
            <CheckBox
              checked={currentVideo === "Deutsch"}
              onPress={() => setCurrentVideo("Deutsch")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four,
              }}
              uncheckedColor={Color.primary.one}
              checkedColor={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
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
            <Text style={{ color: theme === "dark" ? Color.primary.Four :Color.primary.three, fontSize: 20 }}>
              Italiano
            </Text>
            <CheckBox
              checked={currentVideo === "Italiano"}
              onPress={() => setCurrentVideo("Italiano")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four,
              }}
              uncheckedColor={Color.primary.one}
              checkedColor={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
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
            <Text style={{ color: theme === "dark" ? Color.primary.Four :Color.primary.three, fontSize: 20 }}>
              Espagnol (Espana)
            </Text>
            <CheckBox
              checked={currentVideo === "Espagnol(Espana)"}
              onPress={() => setCurrentVideo("Espagnol(Espana)")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four,
              }}
              uncheckedColor={Color.primary.one}
              checkedColor={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>

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
            <Text style={{ color: theme === "dark" ? Color.primary.Four :Color.primary.three, fontSize: 20 }}>
              Français
            </Text>
            <CheckBox
              checked={currentVideo === "Français"}
              onPress={() => setCurrentVideo("Français")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four,
              }}
              uncheckedColor={Color.primary.one}
              checkedColor={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
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
            <Text style={{ color: theme === "dark" ? Color.primary.Four :Color.primary.three, fontSize: 20 }}>
              Portugues
            </Text>
            <CheckBox
              checked={currentVideo === "Portugues"}
              onPress={() => setCurrentVideo("Portugues")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              containerStyle={{
                backgroundColor: theme === "dark" ? Color.primary.three :Color.primary.Four,
              }}
              uncheckedColor={Color.primary.one}
              checkedColor={Color.primary.one}
            />
          </View>
          <Divider style={{ opacity: 0.4 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Language;
