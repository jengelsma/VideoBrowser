import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';

import { BaseRouter } from '@react-navigation/native';
import { getVideos } from '../api/YTServer'

const VideoListScreen = ({ navigation }) => {

  useEffect(() => {
    getVideos((data) => {
      console.log("received: ", data);
    });
  }, []);


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

