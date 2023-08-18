import { View, Text, Pressable, Image } from "react-native";
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

const Description = ({ navigation, route }) => {
  const { item } = route.params;
  // const { id } = item;

  const [star, setStar] = useState(1);
  const [dataEpisode, setDataEpisode] = useState([]);
  const [dataSeason, setDataSeason] = useState([]);
  const [dataApiEpisode, setDataApiEpisode] = useState([]);
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
    const fecthSeason = async () => {
      try {
        const datas = await Season();
        setDataSeason(datas);
      } catch (error) {
        console.log(error);
      }
    };

    fecthSeason();

    setPickerData(dataSeason);

    setDataEpisode(dataSeason[0]?.episodes);
    setChoosenIndex(dataSeason[0]?.titleSeason);
    setChoosenLabel(dataSeason[0]?.titleSeason);

    setStar(item.star);
  }, [dataSeason]);

  const handleSelectChange = (itemValue) => {
    if (choosenIndex !== itemValue) {
      setDataEpisode(dataSeason[itemValue]?.episodes);
      setChoosenLabel(dataSeason[itemValue]?.titleSeason);
    }
    setChoosenIndex(itemValue);
  };
  // console.log(choosenIndex);
  return (
    <View style={{ backgroundColor: Color.primary.three, height: "100%" }}>
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
            <Text style={{ fontSize: 10, color: Color.primary.Four }}>
              Serie.{item.year}
            </Text>
          </View>
          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <StarRating star={item.stars} />
            </View>
            <Text style={{ color: Color.primary.Four }}>
              Average {item.stars}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: Color.primary.Four,
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
                color: Color.primary.Four,
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
                    color={Color.primary.Four}
                  />
                </Pressable>
                <Text
                  style={{
                    color: Color.primary.Four,
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
            selectedValue={choosenIndex}
            onValueChange={handleSelectChange}
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
    </View>
  );
};

export default Description;
