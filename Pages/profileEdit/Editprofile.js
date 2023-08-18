import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Color } from '../../utilities/Color'
import { MaterialIcons } from '@expo/vector-icons'
import { Divider } from 'react-native-paper'

const Editprofile = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor:Color.primary.three, flex:1 }}>
      <View style={{ marginLeft: 25, marginRight: 25 }}>
      <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
      <MaterialIcons
              name="keyboard-arrow-left"
              size={40}
              color={Color.primary.Four}
            />
        <Text style={{color:Color.primary.one, fontSize:25}}>Edit Profile</Text>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate("editprofile")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ color: Color.primary.Four, fontSize: 20 }}>
              Change user name
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={Color.primary.Four}
            />
          </View>
          <Divider style={{opacity:0.4}}/>
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("editprofile")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ color: Color.primary.Four, fontSize: 20 }}>
              Change Email
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={Color.primary.Four}
            />
          </View>
          <Divider style={{opacity:0.4}}/>
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("editprofile")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={{ color: Color.primary.Four, fontSize: 20 }}>
              Change password
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={Color.primary.Four}
            />
          </View>
          <Divider style={{opacity:0.4}}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Editprofile