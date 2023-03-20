import Carousel from "react-bootstrap/Carousel";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
const cb = classNames.bind(styles);

function Slider() {
  return (
    <Carousel fade={true} as={"section"}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/121735063_134631101689564_4726383463207099661_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ifSgNOudHB8AX8vW3ft&_nc_ht=scontent.fhan14-2.fna&oh=00_AfC7ry8V6PFVIh_p6lCtuOM9iTpDP_Cu6uUxQil_01CL3Q&oe=6440300F"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/169917503_257639329388740_7880347934572455420_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=G2fsP3a4hQ4AX8_d_my&_nc_ht=scontent.fhan14-2.fna&oh=00_AfC3-BGMfLH5I-CpwSTJ1La8X6LKJrab-uk65jV2p5bSYQ&oe=64401E25"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/269814226_425842799235058_6038435942772227737_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=Ttc7pbs_X-MAX_q5kXn&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAU26c6fYsWFa1unkBZ5PYj9JyZ6OBNOalG-0XX8-jQVw&oe=641E6C37"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
