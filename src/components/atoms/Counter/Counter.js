import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";

const Counter = () => {
  const [increaseCounter, setIncreaseCounter] = useState(0);
  return (
    <SafeAreaView style={stylesForOpacity.counterContainer}>
      <Text>{increaseCounter}</Text>
      <TouchableOpacity
        onPress={() => {
          setIncreaseCounter((pre) => ++pre);
        }}
        style={stylesForOpacity.backgroundForOpacity}
      >
        <Text>Click to Increase Count</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Counter;

const stylesForOpacity = StyleSheet.create({
  backgroundForOpacity: {
    backgroundColor: "#E5E4E2",
    width: "40%",
    padding: 2,
    marginTop: 1,
  },
  counterContainer: {
    flex: 1,
    alignItems: "center",
  },
});
