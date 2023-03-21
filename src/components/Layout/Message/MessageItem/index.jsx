import classNames from "classnames/bind";

import styles from "./MessageItem.module.scss";
const cb = classNames.bind(styles);

function MessageItem({ message, itemIndex }) {
  return (
    <div className={cb("item", "text-end", itemIndex)}>
      <p className={cb("d-inline-block", "text")}>{message}</p>
    </div>
  );
}

export default MessageItem;
