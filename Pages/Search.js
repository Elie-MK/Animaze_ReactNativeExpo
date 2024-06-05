import { View, Text, Alert, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Color } from "../utilities/Color";
import { SearchBar } from "@rneui/base";
import { useState } from "react";
import { Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Episode } from "../Api";
import { useColorScheme } from "react-native";

const Search = ({navigation}) => {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const data = await Episode();
        setPosts(data);
      } catch (error) {
        Alert.alert("Erreur de connextion", error);
      }
    };
    fetchEpisode()
    filterPosts();
  }, [value]);

  const filterPosts = () => {
    const filtered = posts.filter((data) =>(data.titleEpisode || data.link || data.imgEpisode).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };
  const theme = useColorScheme();


  return (
    <SafeAreaView style={{ backgroundColor: theme === "dark" ? Color.primary.three:Color.primary.Four, flex: 1 }}>
      <View style={{ marginLeft: 25, marginRight: 25 }}>
        <SearchBar
          platform="ios"
          containerStyle={{ backgroundColor: theme === "dark" ? Color.primary.three:Color.primary.Four }}
          inputContainerStyle={{ backgroundColor: "#525050" }}
          inputStyle={{ color: Color.primary.Four }}
          loadingProps={{}}
          selectionColor={Color.primary.one}
          onChangeText={(newVal) => setValue(newVal)}
          onClearText={() => onClearText()}
          placeholder="Search"
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          value={value}
          cancelButtonProps={{ color: theme === "dark" ? Color.primary.Four:Color.primary.three }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Text style={{ color: theme === "dark" ? Color.primary.Four:Color.primary.three, fontSize: 18 }}>
            Recent Searchs
          </Text>
          <Text style={{ color: Color.primary.one, fontSize: 18 }}>Clear</Text>
        </View>
        {
          value.length>0 && (
            <FlatList 
            data={filteredPosts}
            renderItem={({item})=>(
              <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: item.imgEpisode,
                  width: 150,
                  height: 80,
                }}
                style={{ borderRadius: 10 }}
              />
              <View style={{ flexDirection: "row", gap: 40, alignItems: "center" }}>
                <Text style={{ color: theme === "dark" ? Color.primary.Four:Color.primary.three, fontSize: 20, width:140 }}>
                  {item.titleEpisode}
                </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('videoplayer', {item})}>
              <AntDesign
                  name="playcircleo"
                  size={24}
                  color={theme === "dark" ? Color.primary.Four:Color.primary.three}
                />
              </TouchableOpacity>
              </View>
            </View>
            )}
            />
          )
        }
      </View>
    </SafeAreaView>
  );
};

export default Search;
