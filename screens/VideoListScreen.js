import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { BaseRouter } from '@react-navigation/native';
import { getVideos } from '../api/YTServer'

const VideoListScreen = ({ navigation }) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos((data) => {
      // console.log("received: ", data);
      setVideos(data.items);
    });
  }, []);

  const renderVideo = ( { index, item}) => {
    return (
      <View>
        <Text> {item.snippet.title} </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        extraData={videos}
        renderItem={renderVideo} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
  },
});



export default VideoListScreen;

