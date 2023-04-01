import { createContext, useState } from 'react';

export const PlayLaterContext = createContext({
  videos: [],
  addVideo: (video) => {},
  deleteVideo: (id) => {},
});

const PlayLaterContextProvider = ({ children }) => {
  const [playLaterVideos, setPlayLaterVideos] = useState([]);

  const addVideo = (video) => {
    setPlayLaterVideos((currentPlayLaterVideos) => {
      return [...currentPlayLaterVideos, video];
    });
  };

  const deleteVideo = (id) => {
    setPlayLaterVideos((currentPlayLaterVideos) => {
      return currentPlayLaterVideos.filter((video) => video.id.videoId != id);
    });
  };

  const value = {
    videos: playLaterVideos,
    addVideo: addVideo,
    deleteVideo: deleteVideo,
  };

  return (
    <PlayLaterContext.Provider value={value}>
      {children}
    </PlayLaterContext.Provider>
  );
};

export default PlayLaterContextProvider;
