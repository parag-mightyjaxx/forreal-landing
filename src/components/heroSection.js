import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
import appStoreImage from '../static/images/AppStore.svg'
import playStoreImage from '../static/images/GooglePlay.svg'

import Screen1 from '../static/images/Screen01.png'
import Screen2 from '../static/images/Screen02.png'
import Screen3 from '../static/images/Screen03.png'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HeroSection = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="hero-section">
      <div className="container">
        <div className="hero-text">
          <h1 className="title">We power<br/>real brands.</h1>
          <p className="text">Sign up, scan and authenticate your <br/> product with Forreal app today.</p>
        </div>
        <Slider {...settings}>
          <div className="slider-slide">
            <img className="slider-img" src={Screen1} />
          </div>
          <div className="slider-slide">
            <img className="slider-img" src={Screen2} />
          </div>
          <div className="slider-slide">
            <img className="slider-img" src={Screen3} />
          </div>
        </Slider>
        <div className="available-text">
          <h3>Available on</h3>
          <div className="button-container">
            <a href="https://apps.apple.com/sg/app/forreal-app/id1506653955" className="download-button app-store">
              <img className="app-store" src={appStoreImage} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.app.forreal" className="download-button play-store">
                <img className="play-store" src={playStoreImage} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
