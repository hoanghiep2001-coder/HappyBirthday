import Carousel from "react-bootstrap/Carousel";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import slide1 from "../../../assets/img/Em/slide1.jpg";
import slide2 from "../../../assets/img/Em/slide2.jpg";
import slide3 from "../../../assets/img/Em/slide3.jpg";
const cb = classNames.bind(styles);

function Slider() {
  const text1 = "Ỏ =))) Đáng iu zay ❤️";
  const text2 = "Chuẩn bị thi Đại Học ha 😂😂";
  const text3 = "Đợt này hình như gặp anh rồi đấy 😂😂";

  return (
    <Carousel fade={true} as={"section"} className={cb("slider")} slide={false}>
      <Carousel.Item interval={5000} className={cb("item")}>
        <img className={cb("item-img")} src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>Cấp 3!?</h3>
          <p className={cb("item-desc")}>{text1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} className={cb("item")}>
        <img className={cb("item-img")} src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Kỷ yếu ❤️!?</h3>
          <p className={cb("item-desc")}>{text2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} className={cb("item")}>
        <img className={cb("item-img")} src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Đại học!?</h3>
          <p className={cb("item-desc")}>{text3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
