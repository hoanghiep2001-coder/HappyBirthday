import classnames from "classnames/bind";
import Content from "./Content";
import styles from "./Layout.module.scss";

const cb = classnames.bind(styles);
function Layout() {
  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner", "container")}>
        <Content />
      </div>
    </div>
  );
}

export default Layout;
