import classnames from "classnames/bind";
import Content from "./Content";
import styles from "./Layout.module.scss";
import subBackground from "../../assets/img/Em/slide1.jpg";
import { useContext } from "react";
import { Context } from "./Context/Context";
import { useState } from "react";
const cb = classnames.bind(styles);
function Layout() {
  const context = useContext(Context);
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState("Sẵn sàng chưa!?");
  const handleShowContent = (e) => {
    e.target.classList.add("d-none");
    setShow(true);
  };
  const handleChangeReady = () => {
    setReady("Bắt đầu nha!");
  };
  return (
    <div className={cb("wrapper")}>
      <div
        style={
          context.background
            ? {
                backgroundImage: `url(${subBackground})`,
              }
            : {}
        }
        className={cb("inner", context.background ? "fade" : "")}
      >
        {show ? <Content playSong={true} /> : ""}
        <button
          onClick={handleShowContent}
          type="button"
          className={cb("button-show")}
          onMouseEnter={handleChangeReady}
        >
          {ready}
        </button>
      </div>
    </div>
  );
}

export default Layout;
