import icSoundOn from "@/assets/ic_sound-on.svg";
import icSoundOff from "@/assets/ic_sound-off.svg";
import audioSaved from "@/assets/audio/horse.ogv"
import React, { useRef, useState } from "react";

export const Sound = React.memo(() => {
  const audioRef = useRef(null);
  let [state, setState] = useState({
    sound: true,
  });

  const toogleSound = () => {
    const audio = audioRef.current;
    audio.muted = setState({sound: !state.sound});
  }

  return (
    <>
      <audio ref={audioRef} autoPlay={true}>
        {/* <source src={audioSaved} type="audio/ogg" /> */}
        {/* <source src="horse.mp3" type="audio/mpeg" /> */}
        Your browser does not support the audio element.
      </audio>
      <button onClick={toogleSound} className="w-auto bg-transparent hover:bg-transparent">
        <img src={state.sound ? icSoundOn : icSoundOff} alt="" />
      </button>
    </>
  )
});
