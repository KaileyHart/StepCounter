import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {Pedometer} from "expo-sensors";

// * React Native Tutorial: https://www.youtube.com/watch?v=RaSyX6COTDk

export default function App() {

  const backgroundImage = {uri: "./assets/running.jpg"};

  const [pedometerAvailability, setPedometerAvailability ] = useState("");
  const [stepCount, setStepCount ] = useState(0);

  // * Check if the pedometer is available on the device
  Pedometer.isAvailableAsync().then(
    (result) => {
      setPedometerAvailability(String(result));
    },
    (error) => {
      setPedometerAvailability(error);
    }
  );

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} resizeMode='cover' source={backgroundImage}>
      <View style={{flex: 1, justifyContent: "center"}}> 
        <Text style={styles.headingDesign}>Is Pedometer Available on the device: {pedometerAvailability} </Text>
      </View>
    </ImageBackground>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  headingDesign: {
    color: "white",
    backgroundColor: "rgba(155,89,182,0.5)",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});
