import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CryptoList from "./src/screens/CryptoList";
import CryptoDetail from "./src/screens/CryptoDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptoList">
        <Stack.Screen
          name="CryptoList"
          component={CryptoList}
          options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
          options={{ headerShown: false }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
