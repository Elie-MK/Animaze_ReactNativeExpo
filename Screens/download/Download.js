import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Color } from '../../utilities/Color'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons/build/Icons'
import { Pressable } from 'react-native'
import { Image } from 'react-native'
import { useColorScheme } from 'react-native'

const Download = ({navigation}) => {
  const theme = useColorScheme();

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
            <Text style={{ color: Color.primary.one, fontSize: 25 }}>
              Downloads
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
          <Pressable>
            <View>
              <Ionicons name="options" size={24} color={theme === "dark" ? Color.primary.Four : Color.primary.three} />
            </View>
          </Pressable>
        </View>

        <View>

         <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
         <Image source={{
            uri:"https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
            width:80,
            height:120
          }} />
          <View>
          <Text style={{color:theme === "dark" ? Color.primary.Four : Color.primary.three, fontSize:25}}>Naruto</Text>
          <Text style={{color:theme === "dark" ? Color.primary.Four : Color.primary.three, fontSize:10, marginTop:1}}>Episode 1</Text>
          <View style={{flexDirection:"row", alignItems:"center", gap:180}}>
            <View style={{backgroundColor:Color.primary.one, padding:5, borderRadius:5,  marginTop:10,}}>
            <Text >240MB</Text>
            </View>
            <View>
            <MaterialCommunityIcons name="trash-can-outline" size={30} color={Color.primary.one} />
            </View>
          </View>
          </View>
         </View>
        </View>
  </SafeAreaView>
  )
}

export default Download