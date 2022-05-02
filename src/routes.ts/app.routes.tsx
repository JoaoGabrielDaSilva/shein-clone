import React from "react";
import { ProductDetails } from "../pages";
import { createStackNavigator } from "@react-navigation/stack";
import { Navbar } from "../components/Navbar";
import { View } from "react-native";
import Constants from "expo-constants";

const Stack = createStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Navbar {...props} />,
        cardStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
