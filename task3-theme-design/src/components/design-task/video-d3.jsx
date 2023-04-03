import React, { useState, useRef } from 'react';
import video from '../../../static/video/sunset-111204.mp4';

export default function Highlight({ children, color }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setIsPlaying(false);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          height: '150px',
          width: '500px',
          borderRadius: '30px',
          backgroundColor: 'white',
          border: '2px solid black',
          position: 'relative',
          zIndex: 2,
          marginBottom: '-65px',
          marginLeft: '124px',
        }}
      >
        <p style={{ color: 'black', fontWeight: 160, fontSize: 20, fontFamily: 'sans-serif' }}>
          Evaluation of your skills
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img width={60} height={60} src="https://img.icons8.com/bubbles/50/null/brown-hair-lady-window.png" />
            <p style={{ margin: 'auto' }}>I'll evaluate your skills</p>
          </div>
          <img width={60} height={60} src="https://img.icons8.com/ios-filled/50/null/hearts.png" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          width: '600px',
          borderRadius: '30px',
          backgroundColor: 'white',
          border: '2px solid black',
          position: 'relative',
          zIndex: 1,
          margin: 'auto',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handlePlayPause}
      >
        <video ref={videoRef} style={{ width: '100%', height: 'auto', borderRadius: '30px' }}>
          <source src={video} type="video/mp4" />
        </video>
        {isPlaying || isMouseOver ? (
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <button style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60">
        <path
          d="M192 96v320l160-160z"
          fill={color}
        />
      </svg>
    </button>
  </div>
) : null}
          </div>
          </div>
          );
          }
