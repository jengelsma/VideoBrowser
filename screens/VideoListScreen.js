import { Button, StyleSheet, View } from 'react-native';

import { BaseRouter } from '@react-navigation/native';
import React from 'react';

const VideoListScreen = ({ navigation }) => {
  return (
    <View>
      <Button 
        title='Goto YTViewerScreen'
        onPress={() => {
          navigation.navigate('Video Viewer', 'video to be displayed');
        }}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({});

export default VideoListScreen;

