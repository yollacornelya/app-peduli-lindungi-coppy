import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  SplashScreen,
  SignupScreen,
  CovidScreen,
  ImunizationScreen,
  EhacScreen,
} from "./Pages";

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CovidScreen"
        component={CovidScreen}
        options={{ headerShown: true, title: "COVID - 19 Test Results" }}
      />
      <Stack.Screen
        name="ImunizationScreen"
        component={ImunizationScreen}
        options={{ headerShown: true, title: "Vaccine and Immunization" }}
      />
      <Stack.Screen
        name="EhacScreen"
        component={EhacScreen}
        options={{ headerShown: true, title: "Ehac", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};
