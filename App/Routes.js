import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  SplashScreen,
  SignupScreen,
  CovidScreen,
  PersonalInfoScreen,
  RegisterDoneScreen,
  SecurityScreen,
} from "./Pages";

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SignupScreen">
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
    </Stack.Navigator>
  );
};
