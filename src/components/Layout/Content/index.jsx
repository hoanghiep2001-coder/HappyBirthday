import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Content.module.scss";
import music1 from "../../../assets/audio/DauAiDamHua.mp3";
import { useEffect } from "react";
import { useRef } from "react";
import AudioControl from "../AudioControl";
import Slider from "../Slider";
const cb = classNames.bind(styles);

function Content() {
  const [song, setSong] = useState(music1);
  // const [playSong, setPlaySong] = useState(true);
  const audioRef = useRef(null);
  const [title, setTitle] = useState(
    "Chào Hà! Cùng nhìn lại thời gian qua chút nhe =))"
  );

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.6;

    audio.onended = () => {
      audio.play();
    };
  }, []);

  const handleCountClick = () => {};

  const handleControlAudio = (data) => {
    if (data === 0) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner")}>
        <AudioControl control={handleControlAudio} />
        <audio className={cb("audio")} src={song} ref={audioRef}></audio>
        <h3 className={cb("title")}>{title}</h3>
        <Slider />
        <div className={cb("image")}></div>
      </div>
    </div>
  );
}

export default Content;
