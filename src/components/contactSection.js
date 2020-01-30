import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import heroImage from "../images/hero-image.svg"

const ContactSection = () => {

  return (
    <section id="contact-section">
      <div className="container">
        <div className="sign-up-text">
          <h1 className="title">Join the club.</h1>
          <p className="text">
            Contact us to see how we can secure your physical collectibles. <br />
            Email us at email@mightyjaxx.com to know more
          </p>
          <p>
            Share via:
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
