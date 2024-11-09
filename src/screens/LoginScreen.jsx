import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/OIP.jpe")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please input user name"
          left={
            <TextInput.Icon icon="account-outline" color="#386FFC" size={30} />
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Please input password"
          secureTextEntry
          left={
            <TextInput.Icon icon="lock-outline" color="#386FFC" size={30} />
          }
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Text style={{ fontSize: 18, lineHeight: 21.09 }}>Register</Text>
          <Text style={{ fontSize: 18, lineHeight: 21.09 }}>
            Forgot password
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "90%" }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#0E18F5" }} />
        <View>
          <Text
            style={{
              width: 190,
              textAlign: "center",
              fontSize: 18,
              lineHeight: 21.09,
            }}
          >
            Other Login Method
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#0E18F5" }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          columnGap: 43,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 74,
            width: 74,
            backgroundColor: "#3AB4FF",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome6 name="user-plus" size={40} color="white" />
        </View>
        <View
          style={{
            flex: 1,
            height: 74,
            width: 74,
            backgroundColor: "#F4AA47",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="wifi" size={40} color="white" />
        </View>
        <View
          style={{
            flex: 1,
            height: 74,
            backgroundColor: "#3A579C",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="facebook" size={40} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },

  buttonContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    rowGap: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "90%",
    backgroundColor: "#386FFC",
  },
  input: {
    borderRadius: 8,
    fontSize: 18,
    lineHeight: 21.09,
    width: "90%",
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
  },
  endTitle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 50,
  },
});
