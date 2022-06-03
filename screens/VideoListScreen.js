import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image, ListItem } from "react-native-elements";
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Video Viewer", item);
        }}>
        <ListItem key={index}>
          <Image 
            source={{ uri: item.snippet.thumbnails.default.url }}
            style={{ width: 100, height: 55 }}
          />
          <ListItem.Content>
            <ListItem.Title> {item.snippet.title} </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
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

