import classnames from "classnames/bind";
import Content from "./Content";
import styles from "./Layout.module.scss";
import subBackground from "../../assets/img/Em/slide1.jpg";
import { useContext } from "react";
import { Context } from "./Context/Context";
const cb = classnames.bind(styles);
function Layout() {
  const context = useContext(Context);
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
        className={cb("inner")}
      >
        <Content />
      </div>
    </div>
  );
}

export default Layout;
