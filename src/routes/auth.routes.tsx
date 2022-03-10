import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../global/styles/theme";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.secondary100,
          },
          contentStyle: {
            backgroundColor: theme.colors.secondary100,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AppointmentCreate" component={AppointmentCreate} />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
