import React, { useState, useEffect, useRef } from "react";
import ReactWaves from "@dschoon/react-waves";
import track7 from "../tracks/track7.mp3";
import track2 from "../tracks/track2.mp3";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Typography } from "@mui/material";
import { useSubtitle } from "../ContextFilter/Subtitlecontext";

const MusicList = () => {
    const { subtitle, setSubtitle } = useSubtitle();
  const initialTracks = [
    { source: track7, title: "Zimt" },
    { source: track2, title: "Ingwer" }
  ];

  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(initialTracks[0]);
  

  const audioRef = useRef(null);
  const speechRecognition = useRef(null);

  useEffect(() => {
    // Initialize SpeechRecognition
    speechRecognition.current = new window.webkitSpeechRecognition(); // Chrome specific
    speechRecognition.current.lang = 'en-US'; // Set language
    speechRecognition.current.continuous = true; // Keep listening
    speechRecognition.current.interimResults = true; // Get interim results

    // Speech recognition event listeners
    speechRecognition.current.addEventListener('result', event => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
        setSubtitle(transcript)
      console.log('Transcript:', transcript);
    });
    speechRecognition.current.addEventListener('end', () => {
      if (playing) {
        speechRecognition.current.start(); // Restart recognition if still playing
      }
    });

    return () => {
      if (speechRecognition.current) {
        speechRecognition.current.stop();
      }
    };
  }, [playing]);

  const togglePlay = () => {
    setPlaying(!playing);

    // Start or stop speech recognition
    if (!playing) {
      speechRecognition.current.start();
    } else {
      speechRecognition.current.stop();
    }
  };

  return (
    <div style={{ position: "relative" }}>
      

      <ReactWaves
        audioFile={track.source} // maps the audio to the element
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
