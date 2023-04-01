import { FlatList, View } from 'react-native';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
  const renderVideoListItem = ({ index, item }) => {
    return <VideoListItem video={item} />;
  };

  return (
    <View>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        extraData={videos}
        renderItem={renderVideoListItem}
      />
    </View>
  );
};

export default VideoList;
