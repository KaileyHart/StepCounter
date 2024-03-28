import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ValueCard from "./src/components/ValueCard";
import ProgressCircle from "./src/components/ProgressCircle";
import {AntDesign} from "@expo/vector-icons";

// * Building a Health Application with React Native: Step Counter: https://www.youtube.com/watch?v=VVoXcr18mdo


export default function App() {

  const [date, setDate ] = useState(new Date());

  // TODO: Connect to useHealthData hook -- 03/28/2024 
  const [stepCount, setStepCount ] = useState(0);
  const [flightCount, setFlightCount] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);

  // * Update the date by adding/subtracting days -- 03/28/2024
  const changeDate = (numberOfDays) => {

    let currentDate = new Date(date);

    currentDate.setDate(currentDate.getDate() + numberOfDays);

    setDate(currentDate);

  };


  return (
    <View style={styles.container}>

    {/* // TODO: Insert AntDesign arrows -- 03/28/2024 */}
    {/* // TODO: Display the date -- 03/28/2024 */}

      <ProgressCircle radius={150} progress={0.25} progressColor={"#ee0f55"} strokeWidth={30} />
      
      <View style={styles.valuesContainer}> 

      {/* // TODO: Insert health data -- 03/28/2024 */}
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
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 12
  },
  valuesContainer: {
    flexDirection: "row", 
    flexWrap: "wrap",
    gap: 25,
    marginTop: 100,
  }
});
