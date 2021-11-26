// import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = (props) => {

  return (
    <div className="cont-carousel">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.10wallpaper.com/wallpaper/1366x768/1911/Scorpion_Mortal_Kombat_X_2019_Game_HD_Poster_1366x768.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.10wallpaper.com/wallpaper/1366x768/1911/2019_Call_of_Dut_Mobile_Game_HD_Poster_1366x768.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.10wallpaper.com/wallpaper/1366x768/1501/halo_4_master_chief-Games_HD_Wallpaper_1366x768.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.10wallpaper.com/wallpaper/1366x768/1501/mario_kart_8-Games_HD_Wallpaper_1366x768.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
