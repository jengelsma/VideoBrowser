import { StyleSheet, View } from "react-native";

import React from "react";
import { WebView } from "react-native-webview";

const YTViewerScreen = ({ route }) => {
  console.log("YTViewerScreen: ", route.params);
  return (
    <View style={styles.screen}>
      <WebView
        javaScriptEnabled
        domStorageEnabled
        source={{
          uri: `https://www.youtube.com/embed/${route.params.id.videoId}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});


export default YTViewerScreen;
