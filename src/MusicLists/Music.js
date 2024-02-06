import React, { useState, useEffect, useRef } from "react";
import ReactWaves from "@dschoon/react-waves";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Typography } from "@mui/material";
import { useSubtitle } from "../ContextFilter/Subtitlecontext";

const MusicList = ({fileName}) => {
  const [subtitle, setSubtitle] = useState();
  const audioSources = {
    "20230310-184211_9998554943-all.mp3": require("../tracks/20230310-184211_9998554943-all.mp3"),
    "20230512-092017_9591190893-all.mp3": require("../tracks/20230512-092017_9591190893-all.mp3"),
    "20230310-184211_9998554944.mp3": require("../tracks/20230310-184211_9998554944.mp3")
    // Add more filename-source pairs as needed
  };
  


    const [playing, setPlaying] = useState(false);
    const [audioSrc, setAudioSrc] = useState(null);
  
 
  
    useEffect(() => {
      // Update the audio source based on the fileName
      if (fileName) {
        setAudioSrc(audioSources[fileName]);
      }
    }, [fileName]);
  

  const audioRef = useRef(null);
  const speechRecognition = useRef(null);


  useEffect(() => {
    // Initialize SpeechRecognition
    if (window.webkitSpeechRecognition && !speechRecognition.current) {
      // Create SpeechRecognition instance
      speechRecognition.current = new window.webkitSpeechRecognition();
      speechRecognition.current.lang = 'en-US'; // Set language
      speechRecognition.current.continuous = true; // Keep listening
      speechRecognition.current.interimResults = true; // Get interim results
  
      // Speech recognition event listeners
      speechRecognition.current.addEventListener('result', event => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setSubtitle(transcript);
        console.log('Transcript:', transcript);
      });
  
      speechRecognition.current.addEventListener('end', () => {
        if (playing) {
          speechRecognition.current.start(); // Restart recognition if still playing
        }
      });
  
      // Start or resume AudioContext after a user gesture
      const resumeAudioContext = () => {
        if (window.webkitAudioContext && window.webkitAudioContext.state === 'suspended') {
          const resumeAudio = () => {
            audioRef.current.play().then(() => {
              if (audioRef.current.paused) {
                // Request user gesture to resume AudioContext
                document.removeEventListener('click', resumeAudio);
                document.removeEventListener('keydown', resumeAudio);
                document.removeEventListener('touchstart', resumeAudio);
                document.removeEventListener('touchend', resumeAudio);
                document.removeEventListener('scroll', resumeAudio);
                document.removeEventListener('wheel', resumeAudio);
                document.removeEventListener('mousedown', resumeAudio);
                document.removeEventListener('mouseup', resumeAudio);
                document.removeEventListener('mousemove', resumeAudio);
              }
            });
          };
  
          // Add event listeners for user gesture
          document.addEventListener('click', resumeAudio);
          document.addEventListener('keydown', resumeAudio);
          document.addEventListener('touchstart', resumeAudio);
          document.addEventListener('touchend', resumeAudio);
          document.addEventListener('scroll', resumeAudio);
          document.addEventListener('wheel', resumeAudio);
          document.addEventListener('mousedown', resumeAudio);
          document.addEventListener('mouseup', resumeAudio);
          document.addEventListener('mousemove', resumeAudio);
  
          // Attempt to resume AudioContext
          window.webkitAudioContext.resume();
        }
      };
  
      resumeAudioContext();
    }
  
    return () => {
      if (speechRecognition.current) {
        speechRecognition.current.stop();
      }
    };
  }, [playing, setSubtitle]);
  

  const togglePlay = () => {
    setPlaying(!playing);

    // Start or stop speech recognition
    if (!playing) {
      // Start recognition only if user interaction
      if (audioRef.current) {
        audioRef.current.play();
      } else {
        speechRecognition.current.start();
      }
    } else {
      // Stop recognition
      speechRecognition.current.stop();
    }
  };

  return (
    <div style={{ position: "relative" }}>
      

      <ReactWaves
      
        audioFile={audioSrc} // maps the audio to the element
        className={"react-waves"}
        options={{
          backend: "MediaElement", // maps the waveform to an audio element
          normalize: true,
          cursorWidth: 2,
          mediaType: "audio",
          progressColor:'#1e2737',
          barGap:10,
          barRadius:5,
          hideScrollbar: true,
          responsive: true,
          barHeight: 2,
          height: 100,
          waveColor: "#cacaca",
        }}
        zoom={3}
        playing={playing}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "2%",
          transform: "translate(-50%, -50%)",
          color: "#cacaca",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          zIndex: 9999
        }}
        onClick={togglePlay}
      >
        {playing ? <PauseIcon /> : <PlayArrowIcon color="primary" fontSize="large" />}
      </div>
    </div>
  );
};

export default MusicList;
