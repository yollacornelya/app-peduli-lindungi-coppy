import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { dokter, myehac, createehc,myehc } from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default EhacScreen = ({ navigation }) => {
  return (
    <View style={styles.bgApp}>
      <View>
        <StatusBar
          barstyle="dark-content"
          translucent
          backgroundColor="(rgba(0,0,0,0)"
        />
        <Image source={dokter} style={styles.gambartop} />
      </View>

      <View style={styles.item}>
        <View style={{ flexDirection: "row" }}>
          <Image source={createehc} style={styles.gambar1} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.teks1}>Create e-HAC</Text>
            <Text style={styles.teks11}>Electronic Health Alert Card</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Image source={myehc} style={styles.gambar2} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.teks2}>My e-HAC</Text>
            <Text style={styles.teks22}>Check your history eHAC here</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgApp: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 220,
    marginTop: windowHeight / 23,
    marginLeft: 17,
    marginRight: 17,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  gambartop: {
    height: 204,
    width: 390,
    left: 0,
    top: 0,
  },
  gambar1: {
    borderRadius: 20,
    height: 80,
    resizeMode: "contain",
    width: 80,
  },
  gambar2: {
    borderRadius: 20,
    height: 80,
    resizeMode: "contain",
    width: 80,
  },
  teks1: {
    fontWeight: "bold",
    fontSize: 18,
    top: 5,
    marginLeft: 10,
  },
  teks11: {
    fontSize: 16,
    top: 5,
    marginLeft: 10,
    color: "#8A8A8A",
  },
  teks2: {
    fontWeight: "bold",
    fontSize: 18,
    top: 5,
    marginLeft: 10,
  },
  teks22: {
    fontSize: 16,
    top: 5,
    marginLeft: 10,
    color: "#8A8A8A",
  },
});
