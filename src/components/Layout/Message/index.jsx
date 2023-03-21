import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import styles from "./Message.module.scss";
import MessageItem from "./MessageItem";
const cb = classNames.bind(styles);

function Message() {
  const [isShow, setIsShow] = useState(false);
  const context = useContext(Context);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
      context.handleSetHideTitle();
      context.handleSetBackground();
    }, 45000);
  }, []);

  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner")}>
        <div className={cb("message-container", isShow ? "doneMess" : "")}>
          <MessageItem
            itemIndex={"item-1"}
            message={"Vậy là cũng đến ngày em tròn 20 rồi =))"}
          />
          <MessageItem
            itemIndex={"item-2"}
            message={
              "Anh làm cái này tặng em nhân ngày đánh dấu cột mốc tuổi 20"
            }
          />
          <MessageItem
            itemIndex={"item-3"}
            message={
              "Mà anh nghĩ nó sẽ là năm rực rỡ nhất của em trong tháng ngày Thanh Xuân!"
            }
          />
          <MessageItem
            itemIndex={"item-4"}
            message={"Lúc làm anh cũng ko nghĩ gì nhiều đâu =))"}
          />
          <MessageItem
            itemIndex={"item-5"}
            message={"Loanh quanh có mỗi nghĩ đến em thui 😂😂"}
          />
          <MessageItem
            itemIndex={"item-6"}
            message={"Chúc em sang tuổi mới có thêm nhiều niềm vui."}
          />
          <MessageItem
            itemIndex={"item-7"}
            message={"Thêm nhiều may mắn, công việc thêm nhiều thành công!"}
          />
          <MessageItem
            itemIndex={"item-8"}
            message={"Và chúc em sớm có được anh =)). Đấy là gợi ý thôi 🙂"}
          />
          <MessageItem
            itemIndex={"item-9"}
            message={
              "Happy Birthdayyy! Chúc bé 1 ngày sinh nhật trọn vẹn và ý nghĩa nhee! ❤️❤️❤️❤️🍰🎂"
            }
          />
          <MessageItem
            itemIndex={"item-10"}
            message={"Mà không có bánh đâu cố chịu nhee 😂😂"}
          />
        </div>
        {isShow ? (
          <div className={cb("message-finish")}>
            <MessageItem
              itemIndex={"item-11"}
              message={"Chúc Em Sinh Nhật Vui Vẻ! Happy BirthDayy 🥳🥳❤️"}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Message;
