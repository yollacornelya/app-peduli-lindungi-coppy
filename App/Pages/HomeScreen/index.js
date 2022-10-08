import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { LogoLonceng, LogoUser } from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default HomeScreen = () => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.container}>
        <Image source={LogoUser} style={styles.imgSize} />
        <Text>Hi,Sata Lesmana</Text>
        <Image source={LogoLonceng} style={styles.imgSize} />
      </View>
      <View>
        <Image source={LogoUser} style={styles.imgSize} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
  },
  container: {
    margin: 40,
    flexDirection: "row",
  },
  imgStyle: {
    marginTop: windowHeight / 8,
    marginBottom: 20,
  },
  Input: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  InputPass: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginTop: 20,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  imgStyle2: {
    flexDirection: "row",
  },
  imgSize: {
    width: null,
    resizeMode: "contain",
    height: 40,
    marginLeft:20,
    flex: 1,
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
  },
  bodyText: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 16,
  },
  footherText: {
    marginTop: 100,
    fontSize: 16,
    marginBottom: 0,
  },
  customeButton: {
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },
});
