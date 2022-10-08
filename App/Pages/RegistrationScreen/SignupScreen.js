import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import {
  LogoBumn,
  LogoKemenkes,
  LogoKominfo,
  LogoKpc,
  LogoPeduli,
  LogoPesan,
} from "../../assets";
import { PrimaryButton } from "../../Componets";

const windowHeight = Dimensions.get("window").height;

export default SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.imgContainer}>
        <Image source={LogoPeduli} style={styles.imgStyle} />
      </View>
      <View>
        <TextInput
          Image
          source={LogoPesan}
          style={styles.Input}
          placeholder="youremail@domain.com"
        />
        <TextInput
          style={styles.InputPass}
          placeholder="Masukkan Password Anda"
        />
        <PrimaryButton
          title="Login"
          style={styles.customeButton}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.footherText}>Bekerjasama Dengan :</Text>
      </View>
      <View style={styles.imgStyle2}>
        <Image source={LogoKpc} style={styles.imgSize} />
        <Image source={LogoKominfo} style={styles.imgSize} />
        <Image source={LogoKemenkes} style={styles.imgSize} />
        <Image source={LogoBumn} style={styles.imgSize} />
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
    marginRight: 30,
    marginLeft: 40,
  },
  imgSize: {
    width: null,
    resizeMode: "contain",
    height: 50,
    margin: 0,
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
