import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image, Input, ListItem } from '@rneui/themed';
import React, { useEffect, useState } from 'react';

import VideoList from '../components/VideoList';
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

  return (
    <View>
      <Input
        placeholder='Enter search terms'
        onChangeText={(value) => setSearchStr(value)}
      />
      <VideoList videos={videos} />
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
