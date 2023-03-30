import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image, Input, ListItem } from '@rneui/themed';
import React, { useEffect, useState } from 'react';

import { getVideos } from '../api/YTServer';

const VideoListScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    if (searchStr.length > 2) {
      getVideos(searchStr, (data) => {
        setVideos(data.items);
      });
    } else {
      setVideos([]);
    }
  }, [searchStr]);

  const renderVideo = ({ index, item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Video Viewer', item);
        }}
      >
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
  };

  return (
    <View>
      <Input
        placeholder='Enter search terms'
        onChangeText={(value) => setSearchStr(value)}
      />
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
    width: '100%',
  },
});

export default VideoListScreen;
