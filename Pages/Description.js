import { View, Text, Pressable, Image, ActivityIndicator, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Color } from "../utilities/Color";
import { BottomSheet, Button, Divider } from "@rneui/base";
import EpisodeItem from "../Components/EpisodeItem";
import { FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import StarRating from "../Components/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addLike, deleteLike } from "../redux/redux";
import { Episode, Season } from "../Api";
import { useColorScheme } from "react-native";

const Description = ({ navigation, route }) => {
  const { item } = route.params;
  // const { id } = item;
  const theme = useColorScheme();

  const [star, setStar] = useState(1);
  const [dataEpisode, setDataEpisode] = useState([]);
  const [dataSeason, setDataSeason] = useState([]);
  const [pickerData, setPickerData] = useState([]);

  const [choosenLabel, setChoosenLabel] = useState("");
  const [choosenIndex, setChoosenIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const favstate = useSelector((state) => state.fav);
  const [fav, setFav] = useState(
    favstate.find((data) => data?.detail?.id == item._id) ? true : false
  );

  const handleFav = () => {
    fav
      ? dispatch(deleteLike(item._id))
      : dispatch(
          addLike({
            qte: 1,
            detail: { img: item?.img, title: item.titleAnime, id: item._id },
          })
        );
    setFav(!fav);
  };

  useEffect(() => {
    const fetchSeason = async () => {
      try {
        const datas = await Season();
        setDataSeason(datas);

        setPickerData(datas);
        setDataEpisode(datas[0]?.episodes);
        setChoosenLabel(datas[0]?.titleSeason);
        setChoosenIndex(0);

        setStar(item.star);
      } catch (error) {
      }
    };

    fetchSeason();
  }, []);

  const handleSelectChange = (selectedIndex) => {
    setChoosenLabel(dataSeason[selectedIndex]?.titleSeason);
    setDataEpisode(dataSeason[selectedIndex]?.episodes);
    setChoosenIndex(selectedIndex); 
  };

  const handlePickerChange = (newValue) => {
    const selectedIndex = pickerData.findIndex(
      (item) => item.titleSeason === newValue
    );
    if (selectedIndex !== -1) {
      handleSelectChange(selectedIndex);
    }
  };

  

  return (
    <View style={{ backgroundColor: theme === "dark" ? Color.primary.three:Color.primary.Four, height: "100%" }}>
      <View>
        <Image
          resizeMode="cover"
          source={{
            uri: item.img,
            width: "100%",
            height: 300,
          }}
          style={{ borderRadius: 10 }}
        />
      </View>

      <View style={{ marginTop: 50, position: "absolute", marginLeft: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 280 }}>
          <Pressable
            style={{
              alignItems: "center",
              backgroundColor: Color.primary.Four,
              borderRadius: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="keyboard-arrow-left" size={40} />
          </Pressable>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Pressable onPress={handleFav}>
              {fav ? (
                <FontAwesome
                  name="bookmark"
                  size={30}
                  color={Color.primary.one}
                />
              ) : (
                <FontAwesome
                  name="bookmark-o"
                  size={30}
                  color={Color.primary.Four}
                />
              )}
            </Pressable>
            <View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color={Color.primary.Four}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 15, marginTop: 10, marginRight: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 25,
                color: Color.primary.one,
                fontWeight: "bold",
                width: 250,
                textAlign: "justify",
              }}
            >
              {item.titleAnime}
            </Text>
            <Text style={{ fontSize: 10, color: theme === "dark" ? Color.primary.Four:Color.primary.three }}>
              Serie.{item.year}
            </Text>
          </View>
          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <StarRating star={item.stars} />
            </View>
            <Text style={{ color: theme === "dark" ? Color.primary.Four:Color.primary.three }}>
              Average {item.stars}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: theme === "dark" ? Color.primary.Four:Color.primary.three,
              marginTop: 10,
              marginBottom: 10,
              textAlign: "justify",
            }}
          >
            {item.desc}
          </Text>
          <Divider />
          <View>
            <Text
              style={{
                color: theme === "dark" ? Color.primary.Four:Color.primary.three,
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Episodes
            </Text>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => setVisible(!visible)}>
                  <MaterialIcons
                    name="arrow-drop-down"
                    size={40}
                    color={theme === "dark" ? Color.primary.Four:Color.primary.three}
                  />
                </Pressable>
                <Text
                  style={{
                    color: theme === "dark" ? Color.primary.Four:Color.primary.three,
                    padding: 10,
                    fontSize: 15,
                  }}
                >
                  Season : {choosenLabel}
                </Text>
              </View>

              <Divider />
            </View>
          </View>
        </View>
      </View>
      <BottomSheet
        isVisible={visible}
        onBackdropPress={() => setVisible(!visible)}
      >
        <View>
          <Button
            title="Done"
            color={Color.primary.one}
            onPress={() => setVisible(!visible)}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Picker
            selectedValue={pickerData[choosenIndex]?.titleSeason}
            onValueChange={handlePickerChange}
          >
            {pickerData?.map((item, index) => (
              <Picker.Item
                label={item?.titleSeason}
                value={item?.titleSeason}
                key={index}
              />
            ))}
          </Picker>
        </View>
      </BottomSheet>

      {
        dataEpisode.length < 1 && (
<ActivityIndicator size="large" color={Color.primary.one} />        )
      }{
        dataEpisode.length>=1 && (
          <FlatList
        data={dataEpisode}
        style={{ flex: 1, marginLeft: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <EpisodeItem
            titleEpisode={item?.titleEpisode}
            img={item?.imgEpisode}
            nav={() => navigation.navigate("videoplayer", { item })}
          />
        )}
      />
        )
      }
    </View>
  );
};

export default Description;
