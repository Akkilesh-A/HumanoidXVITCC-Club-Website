import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio("/Audio/Living in a Robotic World.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const MusicPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="text-center z-0 mt-[10vh] sm:mt-[5vh]">
      <h1 className="text-white mb-[3vh] text-[3em] sm:text-[2em] font-bold ">Our Club Anthem</h1>
      <button className="text-white p-4 bg-[#178376] rounded-xl font-semibold" onClick={toggle}>{playing ? "Pause ⏸️" : "Play  ▶️"}</button>
      <h1 className="text-white mt-[3vh] text-[2em] sm:text-[1em] font-semibold ">Scroll Down, Explore and get Enlightened!</h1>
    </div>
  );
};

export default MusicPlayer;