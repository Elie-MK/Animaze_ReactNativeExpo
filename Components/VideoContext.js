// VideoContext.js
import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export function useVideoContext() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }) {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <VideoContext.Provider value={{ currentVideo, setCurrentVideo }}>
      {children}
    </VideoContext.Provider>
  );
}
