// import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from "./src/styles/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
