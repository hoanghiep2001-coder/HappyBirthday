import classNames from "classnames/bind";
import { useState, useEffect, useRef, useContext } from "react";
import styles from "./Content.module.scss";
import music1 from "../../../assets/audio/DauAiDamHua.mp3";
import music2 from "../../../assets/audio/MatMoc.mp3";
import AudioControl from "../AudioControl";
import Slider from "../Slider";
import Message from "../Message";
import { Context } from "../Context/Context";
const cb = classNames.bind(styles);

function Content() {
  const context = useContext(Context);
  const [song, setSong] = useState(music2);
  const [slider, setSlider] = useState(true);
  const audioRef = useRef(null);
  const [title, setTitle] = useState(
    "Chào Hà! Cùng nhìn lại thời gian qua chút nhe =))"
  );
  const [showNextScene, setShowNextScene] = useState(false);

  const [titleAnim, setTitleAnim] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5;

    audio.onended = () => {
      audio.play();
    };
  }, []);

  const handleNextScene = (e) => {
    setSong(music1);
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
    setTitleAnim(true);
    setTitle("Okay, đến phần chính nè!");
    setSlider(false);
    setShowNextScene(true);
  };

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
        <h3
          className={cb(
            "title",
            titleAnim ? "toLeft" : "",
            context.hideTitle ? "hideTitle" : ""
          )}
        >
          {title}
        </h3>
        {slider ? <Slider /> : <Message />}
        <button
          type="button"
          onClick={handleNextScene}
          className={cb("next-scene", showNextScene ? "none" : "")}
        >
          Xem xong rui nhấn đây nha
        </button>
      </div>
    </div>
  );
}

export default Content;
