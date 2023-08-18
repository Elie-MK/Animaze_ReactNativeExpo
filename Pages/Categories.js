import { View, Text, StatusBar, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Color } from '../utilities/Color';
import { FlatList } from 'react-native';
import Card from '../Components/Card';

const Categories = ({route, navigation}) => {
    const {item}=route.params

    const [genreDatas, setGenreDatas] = useState([])

    useEffect(()=>{
        setGenreDatas(item.datas)
    })

  return (
    <SafeAreaView style={{ backgroundColor:Color.primary.three, flex:1 }}>
       <View style={{ marginLeft: 25, marginRight: 25}}>
       <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom:20
        }}
      >
        <View>
          <Text style={{ color: Color.primary.one, fontSize: 25 }}>{item.title}</Text>
        </View>
        <Pressable>
          <View>
            <Feather name="search" color={"white"} size={30} />
          </View>
        </Pressable>
      </View>
      <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={genreDatas}
            renderItem={({ item }) => (
              <Card
                key={item.id}
                image={item.img}
                animeTitle={item.titleAnime}
                navigation={() => navigation.navigate("description", { item })}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
       </View>
    </SafeAreaView>
  )
}

export default Categories