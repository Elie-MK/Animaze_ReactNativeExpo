import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import Card from "../../Components/Card";
import { ScrollView } from "react-native";
import Database from "../../bd";
import { FlatList } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [allDatas, setAllDatas] = useState([]);

  useEffect(() => {
    const data = Database.find((data) => data.type == "anime");
    setAllDatas(data.datas);
  }, []);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <ScrollView>
        <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 7,
            marginBottom: 7,
            marginTop: 7,
          }}
        >
          Most popular
        </Text>
        <FlatList
          style={{}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={allDatas}
          renderItem={({ item }) => (
            <Card
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
