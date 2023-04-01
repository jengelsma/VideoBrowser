import { StyleSheet, View } from 'react-native';
import { useContext, useLayoutEffect } from 'react';

import HeaderButton from '../components/HeaderButton';
import { PlayLaterContext } from '../context/PlayLaterContext';
import React from 'react';
import { WebView } from 'react-native-webview';

const YTViewerScreen = ({ navigation, route }) => {
  const playLaterContext = useContext(PlayLaterContext);
  const video = route.params;
  const videoId = video.id.videoId;
  let videoIsSaved = false;

  if (playLaterContext.videos.some((v) => v.id.videoId === videoId)) {
    videoIsSaved = true;
  }

  function changePlayLaterStatusHandler() {
    if (videoIsSaved) {
      playLaterContext.deleteVideo(videoId);
    } else {
      playLaterContext.addVideo(video);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            icon={videoIsSaved ? 'bookmark' : 'bookmark-outline'}
            color='blue'
            onPress={changePlayLaterStatusHandler}
          />
        );
      },
    });
  }, [navigation, changePlayLaterStatusHandler]);

  return (
    <View style={styles.screen}>
      <WebView
        javaScriptEnabled
        domStorageEnabled
        source={{
          uri: `https://www.youtube.com/embed/${videoId}`,
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
