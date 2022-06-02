import React from "react";
import { View, Text, StyleSheet } from "react-native";

const YTViewerScreen = ({ route }) => {
  console.log("YTViewerScreen: ", route.params);
  return (
    <View>
      <Text> YTViewerScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default YTViewerScreen;
