import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ValueCard from "./components/ValueCard";
import ProgressCircle from "./components/ProgressCircle";

// * Building a Health Application with React Native: Step Counter: https://www.youtube.com/watch?v=VVoXcr18mdo

export default function App() {

  const [stepCount, setStepCount ] = useState(0);
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  return (
    <View style={styles.container}>

      <ProgressCircle radius={150} progress={0.25} progressColor={"#ee0f55"} strokeWidth={25} />
      
      <View style={styles.valuesContainer}> 

        <ValueCard label="Steps" value="1219"/>
        <ValueCard label="Distance" value="2km"/>
        <ValueCard label="Flights Climbed" value="2"/>

      </View>

      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: "center",
    padding: 12
  },
  valuesContainer: {
    flexDirection: "row", 
    flexWrap: "wrap",
    gap: 55,
    marginTop: 100,
  }
});
