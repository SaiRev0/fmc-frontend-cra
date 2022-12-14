/* eslint-disable react/react-in-jsx-scope */
import Classes from "./Banner.module.css";
// import Fade from "react-reveal/Fade";

function Banner(props) {
  return (
    // <Fade big duration={1000}>
    <div className={Classes.banner}>
      <img
        alt="img"
        src={process.env.REACT_APP_AWS_S3_URI + "/HERO-WO-LOGO-011.svg"}
        className={Classes.image}
      />
      <img
        alt="img"
        src={process.env.REACT_APP_AWS_S3_URI + "/mobile-hero-section-02.svg"}
        className={Classes.mobile_hero}
      />
      <img
        alt="img"
        src={process.env.REACT_APP_AWS_S3_URI + "/Group_7139.svg"}
        className={Classes.logo_dates}
      />
    </div>
  );
}

export default Banner;
