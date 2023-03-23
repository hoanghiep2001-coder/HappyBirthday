import Carousel from "react-bootstrap/Carousel";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import slide1 from "../../../assets/img/Em/slide1.jpg";
import slide2 from "../../../assets/img/Em/slide2.jpg";
import slide3 from "../../../assets/img/Em/slide3.jpg";
import slide4 from "../../../assets/img/Em/slide4.jpg";
import video from "../../../assets/img/Em/video/clip.mp4";
const cb = classNames.bind(styles);

function Slider() {
  const text1 = "Ỏ =))) Đáng iu zay ❤️";
  const text2 = "Chuẩn bị thi Đại Học ha 😂😂";
  const text3 = "Đợt này hình như gặp anh rồi đấy 😂😂";
  const text4 = "Hôm tân gia này 😂😂";
  const text5 = "Chỉ nhớ hôm đấy em khá là xinh 😂😂";
  return (
    <Carousel className={cb("slider")} fade>
      <Carousel.Item interval={8000} className={cb("item")}>
        <img className={cb("item-img")} src={slide1} alt="First slide" />
        <Carousel.Caption className={cb("overlay")}>
          <h3>Cấp 3!?</h3>
          <p className={cb("item-desc")}>{text1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000} className={cb("item")}>
        <img className={cb("item-img")} src={slide2} alt="Second slide" />
        <Carousel.Caption className={cb("overlay")}>
          <h3>Kỷ yếu ❤️!?</h3>
          <p className={cb("item-desc")}>{text2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000} className={cb("item")}>
        <img className={cb("item-img")} src={slide3} alt="Third slide" />
        <Carousel.Caption className={cb("overlay")}>
          <h3>Đại học!?</h3>
          <p className={cb("item-desc")}>{text3}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={11000} className={cb("item")}>
        <video
          className={cb("item-img")}
          controls
          src={video}
          alt="Third slide"
          muted
          autoPlay
          loop
        />
        <Carousel.Caption className={cb("overlay")}>
          <h3>Hơ!?</h3>
          <p className={cb("item-desc")}>{text4}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000} className={cb("item")}>
        <img className={cb("item-img")} src={slide4} alt="Third slide" />
        <Carousel.Caption className={cb("overlay")}>
          <h3 className={cb("cenema")}>Hôm trước này!?</h3>
          <p className={cb("item-desc", "cenema")}>{text5}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
