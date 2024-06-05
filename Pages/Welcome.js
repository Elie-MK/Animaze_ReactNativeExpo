import { View, Text, Image, FlatList, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "@rneui/base";
import { Color } from "../utilities/Color";
import Database from "../utilities/bd";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = ({ navigation }) => {
  const [dataCarousel, setDataCarousel] = useState([]);
  useEffect(() => {
    const datas = Database.find((data) => data.type === "carousel");
    setDataCarousel(datas.datas);

    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        
        if (token) {
          navigation.replace(' ');
        } else {
          // Aucun jeton JWT trouvé, naviguer vers la page 'welcome'
          navigation.navigate('welcome');
        }
      } catch (error) {
        console.error('Erreur lors de la vérification du jeton JWT:', error);
      }
    };

    checkToken();
  }, [navigation]);


  return (
    <View style={{ backgroundColor: Color.primary.three, height:"100%" }}>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      keyExtractor={(item)=>item.id.toString()}
      data={dataCarousel}
      renderItem={({item})=>(
          <View>
            <View>
              <Image
                source={{uri:item.img}}
                style={{
                  width: Dimensions.get('screen').width,
                  height: 550,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}
              />
            </View>
            <View style={{ alignItems: "center", marginTop: 35 }}>
              <Text
                style={{
                  color: Color.primary.Four,
                  fontSize: 28,
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  color: Color.primary.one,
                  fontSize: 30,
                  padding: 5,
                }}
              >
                {item.subtitle}
              </Text>
              <Text
                style={{
                  color: Color.primary.Four,
                  padding: 5,
                  fontSize: 14,
                  marginBottom:'10%'
                }}
              >
                {item.desc}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={{ alignItems: "center", marginBottom:30 }}>
        <Button
          onPress={() => navigation.navigate("login")}
          title="Next"
          titleStyle={{  fontSize: 20 }}
          buttonStyle={{
            width: 340,
            padding: 13,
            borderRadius: 12,
            backgroundColor: Color.primary.one,
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
