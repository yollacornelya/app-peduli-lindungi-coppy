import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

import { LogoLonceng, LogoUser, LogoHand, Panah, vaccine,testresult,ic_ehac,telemedicine,travel,health,statistik,Hospital } from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default HomeScreen = () => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.container}>
        <Image source={LogoUser} style={styles.imgSize} />
        <Text style={styles.hi}>Hi, </Text>
        <Text style={styles.sata}>Sata Lesmana</Text>
        <Image source={LogoLonceng} style={styles.imgSize2} />
      </View>
      <View>
        <Image source={LogoUser} style={styles.imgSize} />
      </View>
      <View style={styles.kotakBiru}>
        <View>
          <Text style={styles.text1}>Entering A Public Space?</Text>
          <Text style={styles.text2}>Stay Alert To Stay Safe</Text>
        </View>
        <View>
          <Image source={LogoHand} style={styles.logo1} />
        </View>
      </View>
      <View style={styles.kotakPutih}>
        <View style={styles.row}>
          <Image source={Panah} style={styles.panah} />
          <Text style={styles.fonthitam}>Check-In Prefence</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Image source={vaccine} style={styles.gambar2} />
          <Text style={styles.tulisan}>Vaccine And Immunization</Text>
        </View>
        <View style={styles.column}>
          <Image source={testresult} style={styles.gambar2} />
          <Text style={styles.tulisan}>Covid-19 Test Results</Text>
        </View>
        <View style={styles.column}>
          <Image source={ic_ehac} style={styles.gambar2} />
          <Text style={styles.tulisan}>Ehac</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.column}>
          <Image source={travel} style={styles.gambar2} />
          <Text style={styles.tulisan}>Travel Regulations</Text>
        </View>
        <View style={styles.column}>
          <Image source={telemedicine} style={styles.gambar2} />
          <Text style={styles.tulisan}>Telemedicine</Text>
        </View>
        <View style={styles.column}>
          <Image source={health} style={styles.gambar2} />
          <Text style={styles.tulisan}>Healthcare Facility</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.column}>
          <Image source={statistik} style={styles.gambar2} />
          <Text style={styles.tulisan}>Covid-19 Statistic</Text>
        </View>
        <View style={styles.column}>
          <Image source={Hospital} style={styles.gambar2} />
          <Text style={styles.tulisan}>Find Hospital Bed</Text>
        </View>
        <View style={styles.column}></View>
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
    marginTop: 60,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
  },
  row1: {
    flexDirection: "row",
    flex: 1,
    marginTop:-70,
    marginRight: 15,
  },
  column: {
    flexDirection: "column",
    flex: 1,
    marginRight: -10,
  },
  tulisan: {
    flex: 1,
    marginTop: 5,
    resizeMode: "contain",
    textAlign: "center",
  },
  kotakBiru: {
    backgroundColor: "#239BD8",
    padding: 30,
    marginHorizontal: 30,
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 0,
    paddingEnd: 0,
  },
  kotakPutih: {
    backgroundColor: "white",
    padding: 30,
    marginHorizontal: 30,
    marginTop: -1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 0,
  },
  hi: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 10,
    fontWeight: "bold",
  },
  sata: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 4,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 0,
  },
  text1: {
    color: "white",
    fontSize: 17,
    marginRight: 10,
  },
  text2: {
    fontSize: 13,
    color: "white",
    opacity: 0.9,
  },
  gambar2: {
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 20,
    height: 80,
    resizeMode: "contain",
    width: 80,
  },
  fonthitam: {
    fontSize: 14,
    marginLeft: -90,
    fontWeight: "bold",
    color: "#000000",
  },
  logo1: {
    resizeMode: "contain",
    height: 92,
    marginLeft: -60,
    flex: 0,
  },
  panah: {
    resizeMode: "contain",
    height: 20,
    marginLeft: -100,
    marginBottom: 20,
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
    resizeMode: "contain",
    marginRight: -70,
    marginLeft: -50,
    alignSelf: "flex-start",
    height: 30,
    flex: 1,
  },
  imgSize2: {
    width: null,
    resizeMode: "contain",
    marginRight: -60,
    marginLeft: 50,
    height: 24,
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
