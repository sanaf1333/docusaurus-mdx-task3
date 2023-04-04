import React, { useState, useRef } from 'react';
import video from '../../../static/video/sunset-111204.mp4';

export const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(true);
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
        setIsPlaying(!videoRef.current.paused);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
        setIsPlaying(false);
    };

    return (
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
            <video
                ref={videoRef}
                style={{ width: '100%', height: '100%', borderRadius: '30px', objectFit: 'cover', padding: 10 }}
                src={video}
                type="video/mp4"
            />
            {isMouseOver && !isPlaying && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <button style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60">
                            <path d="M192 96v320l160-160z" fill="black" />
                        </svg>
                    </button>
                </div>
            )}
            {isMouseOver && isPlaying && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <button style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60">
                            <path d="M352 96H224v320h128V96z" fill="black" />
                            <path d="M160 96H32v320h128V96z" fill="black" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};
