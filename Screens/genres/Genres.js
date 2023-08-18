import { View, Text, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Color } from "../../utilities/Color";
import { Feather, Ionicons } from "@expo/vector-icons/build/Icons";
import CardGenres from "../../Components/CardGenres";
import { ImageBackground } from "react-native";
import Database from "../../bd";

const Genres = ({navigation}) => {

  const [genre, setGenre]=useState([])

  useEffect(()=>{
    const data = Database.find(data=>data.type=="genres")
  setGenre(data.datas)
  })
  return (
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
          <Text style={{ color: Color.primary.one, fontSize: 25 }}>Genres</Text>
        </View>
        <Pressable onPress={()=>navigation.navigate('search')}>
          <View>
            <Feather name="search" color={"white"} size={30} />
          </View>
        </Pressable>
      </View>

      <View style={{ marginTop: 20 }}>
       <FlatList 
       data={genre}
       numColumns={2}
       renderItem={({ item }) => (
         <CardGenres 
         imageBack={item.img}
         title={item.title}
         nav={()=>navigation.navigate('categories', {item})}
         />
       )}
       />
      </View>
    </SafeAreaView>
  );
};

export default Genres;
