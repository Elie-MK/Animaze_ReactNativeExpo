import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import Card from "../../Components/Card";
import { ScrollView } from "react-native";
import Database from "../../utilities/bd";
import { FlatList } from "react-native";
import { AnimeDatas } from "../../Api";
import { useColorScheme } from "react-native";
import { Color } from "../../utilities/Color";

const HomeScreen = ({ navigation }) => {
  const [allDatas, setAllDatas] = useState([]);

  useEffect(() => {
    // const datas = Database.find((data) => data.type == "anime");
    // setAllDatas(datas.datas);
      const fetchData = async () => {
        try {
          const data = await AnimeDatas();
          setAllDatas(data)
        } catch (error) {
          console.error("Erreur lors du chargement des données :", error);
        }
      };

     fetchData()
  }, []);

  const handleFav=()=>{
    setFav(!fav)
  }
  const theme = useColorScheme();


  return (
    <View>
      <ScrollView>
        <View>
          <Text
            style={{
              color: theme === "dark" ? Color.primary.Four : Color.primary.three,
              fontSize: 20,
              marginLeft: 7,
              marginBottom: 7,
              marginTop: 7,
            }}
          >
            Most popular
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={allDatas}
            renderItem={({ item, index }) => (
              <Card
              handleFav={handleFav}
                key={index}
                image={item.img}
                animeTitle={item.titleAnime}
                navigation={() => navigation.navigate("description", { item })}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
