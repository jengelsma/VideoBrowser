import { Image, ListItem } from '@rneui/base';

import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VideoListItem = ({ video }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Video Viewer', video);
      }}
    >
      <ListItem key={video.id.videoId}>
        <Image
          source={{ uri: video.snippet.thumbnails.default.url }}
          style={{ width: 100, height: 55 }}
        />
        <ListItem.Content>
          <ListItem.Title> {video.snippet.title} </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </Pressable>
  );
};

export default VideoListItem;
