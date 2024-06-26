import { View, Text,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Color } from "../../utilities/Color";
import { Pressable } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import CardFav from "../../Components/CardFav";
import { PaperProvider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike } from "../../redux/redux";
import { useColorScheme } from "react-native";

const Mylist = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.fav)
  const theme = useColorScheme();

  return (
    <PaperProvider>
      <SafeAreaView style={{ marginLeft: 25, marginRight: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.three, fontSize: 25 }}>
              My list
            </Text>
          </View>
          <Pressable onPress={()=>navigation.navigate('search')}>
            <View>
              <Feather name="search" color={theme === "dark" ? Color.primary.Four : Color.primary.three} size={30} />
            </View>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <View>
            <Text style={{ color: theme === "dark" ? Color.primary.Four : Color.primary.three, fontSize: 20 }}>
              Recent Activity
            </Text>
          </View>
          <Pressable >
            <View>
              <Ionicons name="options" size={24} color={theme === "dark" ? Color.primary.Four : Color.primary.three} />
            </View>
          </Pressable>
        </View>
      <>
      {
        state.length<1&&(
          <View style={{alignItems:"center"}}>
          <Image source={{
            uri:"https://images5.alphacoders.com/940/940794.png",
            width:450,
            height:360
          }} />
          <Text style={{color:Color.primary.one, fontSize:50, marginTop:20}}>Is empty</Text>
          </View>
        )
      }
      {
        state.map((item, index)=>(
          <CardFav
          key={index}
          img={item.detail.img}
          title={item.detail.title}
          pressdelete={()=>dispatch(deleteLike(item.detail.id))}
          navDesc={() => navigation.navigate("hometop")}
          navPlay={() => navigation.navigate("hometop")}
          navSup={()=>dispatch(deleteLike(item.detail.id))}
        />
        ))
      }
      </>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Mylist;
