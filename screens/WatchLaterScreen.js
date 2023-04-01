import { PlayLaterContext } from '../context/PlayLaterContext';
import VideoList from '../components/VideoList';
import { useContext } from 'react';

const WatchLaterScreen = () => {
  const playLaterContext = useContext(PlayLaterContext);
  return <VideoList videos={playLaterContext.videos} />;
};

export default WatchLaterScreen;
