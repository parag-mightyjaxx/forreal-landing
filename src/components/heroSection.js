import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import heroImage from "../images/hero-image.svg"

const HeroSection = () => {

  return (
    <section id="hero-section">
      <div className="container">
        <div className="hero-image">
          <img src={heroImage} />
        </div>
        <div className="hero-text">
          <h1 className="title">Mighty Proof<span>™</span></h1>
          <p className="text">The simplest way to verify the authenticity of your products</p>
          <p className="text">Powering the biggest brands in collectibles and merchandise</p>
          <div className="button-container">
            <button className="download-button app-store">
              <span className="button-icon"></span>
              <span className="button-text">
                Get it on the <h3>App Store</h3>
              </span>
            </button>
            <button className="download-button play-store">
              <span className="button-icon"></span>
              <span className="button-text">
                Get it on the <h3>Play Store</h3>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
