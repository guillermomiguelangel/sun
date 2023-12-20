import icSoundOn from "@/assets/ic_sound-on.svg";
import icSoundOff from "@/assets/ic_sound-off.svg";
import audioOGG from "@/assets/audio/SUN_DRINKS.ogg"
import audioMP3 from "@/assets/audio/SUN_DRINKS.mp3"
import React, { useEffect, useRef, useState } from "react";
import { useEffectOnce, useUpdateEffect } from "react-use";

export const Sound = React.memo(() => {
  const audioRef = useRef(null);
  let [state, setState] = useState({
    sound: true,
  });

  useEffect(() => {
    const audio = audioRef.current;
    audio.play().catch((error) => {
      document.addEventListener('click', () => {
        audio.play()
      }, { once: true })
    })
  }, [state.sound])

  const toogleSound = () => {
    const audio = audioRef.current;
    audio.muted = state.sound;
    setState({ sound: !state.sound });
  }

  return (
    <>
      <audio ref={audioRef} autoPlay={true} loop={true} muted={!state.sound}>
        <source src={audioOGG} type="audio/ogg" />
        <source src={audioMP3} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toogleSound} className="w-auto bg-transparent hover:bg-transparent">
        <img src={state.sound ? icSoundOn : icSoundOff} alt="" />
      </button>
    </>
  )
});
