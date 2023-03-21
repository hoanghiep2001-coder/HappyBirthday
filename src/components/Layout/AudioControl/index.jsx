import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./AudioControl.module.scss";
const cb = classNames.bind(styles);

function AudioControl({ control }) {
  const [request, setRequest] = useState("Nghe Nhạc Khum?");
  const continueSound = "Okii!";
  const noSound = "Khum :)";
  const hint = "Chạm vào đâyy!! 👉";

  const [isShow, setIsShow] = useState(false);

  const handleStopSound = () => {
    control(0);
    setRequest("Thì Thôi :)");
  };

  const handleContinueSound = () => {
    control(1);
    setRequest("Có ngay =))");
  };

  const handleHoverOnElement = () => {
    setIsShow(true);
  };

  return (
    <div onMouseEnter={handleHoverOnElement} className={cb("wrapper")}>
      <div className={cb("inner")}>
        <h3 className={cb("title")}>{request}</h3>
        <div className={cb("actions")}>
          <h3 className={cb("actions-item")} onClick={handleContinueSound}>
            {continueSound}
          </h3>
          <h3 className={cb("actions-item")} onClick={handleStopSound}>
            {noSound}
          </h3>
        </div>
        <div className={cb("hint", isShow ? "isDisappear" : "")}>
          <h3 className={cb("hint-title")}>{hint}</h3>
        </div>
      </div>
    </div>
  );
}

export default AudioControl;
