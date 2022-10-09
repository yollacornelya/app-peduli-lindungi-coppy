import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { check, child, covid } from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default function ImunizationScreen() {
  return (
    <View style={styles.bgApp}>
      <View style={styles.item}>
        <View style={{ flexDirection: "row" }}>
          <Image source={covid} style={styles.gambar1} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.teks1}>COVID-19 Vaccination</Text>
            <Text style={styles.teks11}>See your vaccine certificate </Text>
            <Text style={styles.teks11}>here</Text>
          </View>
        </View>
        <View style={styles.garis} />
        <View style={{ flexDirection: "row" }}>
          <Image source={check} style={styles.gambar2} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.teks2}>Check-In Verification</Text>
            <Text style={styles.teks22}>COVID-19 vaccine certificate</Text>
            <Text style={styles.teks22}>verification in EU format</Text>
          </View>
        </View>
        <View style={styles.garis} />
        <View style={{ flexDirection: "row" }}>
          <Image source={child} style={styles.gambar2} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.teks2}>Child Immunization</Text>
            <Text style={styles.teks22}>See your child’s immunization</Text>
            <Text style={styles.teks22}>record here</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgApp: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 350,
    marginTop: windowHeight / 23,
    marginLeft: 17,
    marginRight: 17,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30.0,
    elevation: 24,
  },
  gambartop: {
    height: 204,
    width: 390,
    left: 0,
    top: 0,
  },
  garis: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 220,
    marginStart: 90,
  },
  gambar1: {
    borderRadius: 20,
    height: 80,
    width: 80,
  },
  gambar2: {
    borderRadius: 20,
    height: 80,
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
