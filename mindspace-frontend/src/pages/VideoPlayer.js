import React from 'react'
import { DefaultPlayer as Video  }  from 'react-html5video'
import video from '../assets/MindSpace_Video.mp4'
import 'react-html5video/dist/styles.css'



function VideoPlayer() {
  function nav(){
    window.location.replace("/");
  }

  return (
    <Video autoPlay onEnded={() => nav()} >
      <source src={video} type='video/webm'/>
    </Video>
  );
}

export default VideoPlayer;
