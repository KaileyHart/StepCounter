import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { isEmpty } from "../../utilities/sharedFunctions";

const ValueCard = (props) => {

  let label = isEmpty(props) === false && isEmpty(props.label) === false ? props.label : null;
  let value = isEmpty(props) === false && isEmpty(props.value) === false ? props.value : null;

  return (
    <View style={styles.valueContainer}> 
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

}

export default ValueCard;

const styles = StyleSheet.create({
  valueContainer: {

  },
  label: {
    fontSize: 20,
    color: "#fff"
  },
  value: {
    fontSize: 35,
    color: "#AFB3BE",
    fontWeight: "500"
  }
});
