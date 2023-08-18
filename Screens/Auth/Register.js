import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Color } from "../../utilities/Color";
import { Image } from "react-native";
import { Button, Input } from "@rneui/base";
import { SafeAreaView } from "react-native";
import CustomAlert from "../../Components/CustomAlert";
import { signUp } from "../../Api";
import { ActivityIndicator } from "react-native";

const Register = ({ navigation }) => {
  const [show, setShow] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const onSubmit = async () => {
    if (email === "" || password === "" || username === "") {
      setShowAlert(true);
      setValue("Veuillez remplir tous les champs.");
    } else if (!validateEmail(email)) {
      setValue("L'adresse email n'est pas valide.");
      setShowAlert(true);
    } else {
      try {
        const user = await signUp(username, email, password);
        navigation.navigate("login");
        setTimeout(function () {
          setIsLoading(!isLoading);
        }, 2000);
        console.log(user);
      } catch (error) {
        setShowAlert(true);
        setValue("Veuillez changer votre email ou adresse email");
        setIsLoading(false);
        console.log(error);
      }
    }
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: Color.primary.three, height: "100%" }}
    >
      <View style={{ alignItems: "center", marginTop: "15%" }}>
        <Text style={{ color: Color.primary.one, fontSize: 30, margin: 5 }}>
          Sign up now
        </Text>
        <Text
          style={{ color: Color.secondary.one, fontSize: 20, marginTop: 20 }}
        >
          Please fill the details and create account
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: "15%" }}>
        <View>
          <Input
            placeholder="Username"
            onChangeText={(e) => setUsername(e)}
            inputStyle={{ marginLeft: 10 }}
            leftIconContainerStyle={{ marginLeft: 10 }}
            leftIcon={{
              type: "font-awesome",
              name: "user",
              color: Color.secondary.two,
            }}
            inputContainerStyle={{
              backgroundColor: Color.primary.Four,
              padding: 10,
              width: "90%",
              borderRadius: 12,
            }}
          />
        </View>
        <View>
          <Input
            placeholder="Email"
            onChangeText={(e) => setEmail(e)}
            inputStyle={{ marginLeft: 10 }}
            leftIconContainerStyle={{ marginLeft: 10 }}
            leftIcon={{
              type: "font-awesome",
              name: "envelope",
              color: Color.secondary.two,
            }}
            inputContainerStyle={{
              backgroundColor: Color.primary.Four,
              padding: 10,
              width: "90%",
              borderRadius: 12,
            }}
          />
        </View>
        <View>
          <Input
            placeholder="Password"
            onChangeText={(e) => setPassword(e)}
            inputStyle={{ marginLeft: 12 }}
            leftIconContainerStyle={{ marginLeft: 10 }}
            leftIcon={{
              type: "font-awesome",
              name: "lock",
              color: Color.secondary.two,
              size: 30,
            }}
            rightIcon={
              show
                ? {
                    type: "font-awesome",
                    name: "eye-slash",
                    color: Color.secondary.two,
                    onPress: () => setShow(!show),
                  }
                : {
                    type: "font-awesome",
                    name: "eye",
                    color: Color.secondary.two,
                    onPress: () => setShow(!show),
                  }
            }
            secureTextEntry={show}
            inputContainerStyle={{
              backgroundColor: Color.primary.Four,
              padding: 10,
              width: "90%",
              borderRadius: 12,
            }}
          />
        </View>

        <View style={{ marginTop: "5%" }}>
          <Button
            onPress={onSubmit}
            title="Sign up"
            disabled={isLoading}
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{
              width: 340,
              padding: 13,
              borderRadius: 12,
              backgroundColor: Color.primary.one,
            }}
          />

          {isLoading && (
            <ActivityIndicator size="large" color={Color.primary.one} />
          )}
        </View>
        <View style={{ flexDirection: "row", gap: 20, marginTop: "5%" }}>
          <Text style={{ color: Color.secondary.one }}>____________</Text>
          <Text style={{ color: Color.primary.Four, marginTop: 5 }}>
            or connect with
          </Text>
          <Text style={{ color: Color.secondary.one }}>____________</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={{
              padding: 15,
              borderRadius: 25,
              borderColor: Color.primary.Four,
              borderWidth: 1,
              alignItems: "center",
            }}
          >
            <Image
              style={{ padding: 10 }}
              resizeMode="contain"
              source={{
                uri: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
                width: "90%",
                height: 15,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 15,
              borderRadius: 25,
              borderColor: Color.primary.Four,
              borderWidth: 1,
              alignItems: "center",
            }}
          >
            <Image
              style={{ padding: 10 }}
              resizeMode="contain"
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png",
                width: "90%",
                height: 15,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 15,
              borderWidth: 1,
              borderRadius: 25,
              alignItems: "center",
              borderColor: Color.primary.Four,
            }}
          >
            <Image
              style={{ padding: 10 }}
              resizeMode="contain"
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
                height: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30, gap: 10 }}>
          <Text style={{ color: Color.primary.Four }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: Color.primary.one }}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomAlert visible={showAlert} message={value} onClose={closeAlert} />
    </SafeAreaView>
  );
};

export default Register;
