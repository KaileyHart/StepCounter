import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, Platform } from "react-native";
import {Pedometer} from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

// * React Native Tutorial: https://www.youtube.com/watch?v=RaSyX6COTDk
// * Step count not supported: https://github.com/expo/expo/issues/9463
// ? Find new package to retrieve user's steps? 

export default function App() {

  const backgroundImage = {uri: "./assets/running.jpg"};

  const [stepCount, setStepCount ] = useState(0);

  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  // * Call subscribe() when the user opens the app. -- 03/26/2024 KH
  useEffect(() => {

    getPermissions(); 
    const subscription = subscribe();
    return () => subscription && subscription.remove();

  }, []);

  const subscribe = async () => {

    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {

      const end = new Date();
      const start = new Date();

      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);

      if (pastStepCountResult) {

        setPastStepCount(pastStepCountResult.steps);

      };

      return Pedometer.watchStepCount(result => {

        setCurrentStepCount(result.steps);

      });

    };

  };

  const getPermissions = async () => {

    if (Platform.OS === 'ios') {

      const { granted } = await Pedometer.requestPermissionsAsync();

      if (!granted) {
        console.error('Permission to access pedometer data denied.');
        return;
      }
    }
  };


  return (
    <View style={styles.container}>

      <ImageBackground style={styles.backgroundImage} resizeMode='cover' source={backgroundImage}>

      <View style={{flex: 1, justifyContent: "center"}}> 

        <Text style={styles.headingDesign}>Is Pedometer Available on the device: {isPedometerAvailable} </Text>

        <View>
          <CircularProgress value={pastStepCount} maxValue={6500} radius={210} textColor={"#ECF0F1"}activeStrokeColor={"#F39C12"} inactiveStrokeColor={"#9B59B6"} inActiveStrokeOpacity={0.5} activeStrokeWidth={40} inActiveStrokeWidth={40} title={"Step Count"} titleColor={"#ECF0F1"} titleStyle={{fontWeight: "bold"}}/>
        </View>

        <View>
          <Text>Target: 6500 Steps</Text>
        </View>

        <View>
          <Text>: </Text>
        </View>

        <View>
          <Text>Calories Burned: </Text>
        </View>

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
  },
  textDesign: {
    backgroundColor: "rgba(155,89,182,.5)"
  }
});
