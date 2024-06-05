import { View, Text, TouchableOpacity, Image, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import { Color } from "../../utilities/Color";
import { SafeAreaView } from "react-native";
import { Button, CheckBox, Input } from "@rneui/base";
import CustomAlert from "../../Components/CustomAlert";
import { signIn } from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

const Login = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const onSubmit = async () => {
    if (email === "" || password === "") {
      setShowAlert(true);
      setValue("Veuillez remplir tous les champs.");
    } else if (!validateEmail(email)) {
      setValue("L'adresse email n'est pas valide.");
      setShowAlert(true);
    } else {
      try {
        setIsLoading(true);
        const response = await signIn(email, password);
        if (response && response.token) {
          const token = response.token;
          setIsLoading(false)
          await AsyncStorage.setItem("jwtToken", token);
          navigation.replace(" ");
        }
      } catch (error) {
        isLoading(false);
        setValue(
          "Connexion échouée, verifiez votre mot de passe ou adresse email"
        );
        setShowAlert(true);
      }
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView
      style={{ backgroundColor: Color.primary.three, height: "100%" }}
    >
      <View style={{ alignItems: "center", marginTop: "30%" }}>
        <Text style={{ color: Color.primary.one, fontSize: 30, margin: 5 }}>
          Sign in now
        </Text>
        <Text
          style={{ color: Color.secondary.one, fontSize: 20, marginTop: 20 }}
        >
          Please sign in to continue our app
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: "15%" }}>
        <View>
          <Input
          disabled={isLoading}
            placeholder="Email"
            onChangeText={(e) => setEmail(e)}
            inputStyle={{ marginLeft: 10 }}
            textContentType="emailAddress"
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
          disabled={isLoading}
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 40,
            marginTop: "-6%",
          }}
        >
          <View>
            <CheckBox
              checkedColor={Color.primary.one}
              containerStyle={{ backgroundColor: "" }}
              title="Remember me"
              checked={checked}
              onIconPress={() => setChecked(!checked)}
              textStyle={{ color: Color.primary.Four }}
            />
          </View>
          <TouchableOpacity>
            <Text style={{ color: Color.primary.one }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "5%" }}>
          <Button
            onPress={onSubmit}
            title="Sign in"
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
            or sign in with
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
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={{ color: Color.primary.one }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomAlert visible={showAlert} message={value} onClose={closeAlert} />
    </SafeAreaView>
      </TouchableWithoutFeedback>
  );
};

export default Login;
