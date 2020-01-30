import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import heroImage from "../images/hero-image.svg"

const SignUpSection = () => {

  return (
    <section id="sign-up-section">
      <div className="container">
        <div className="sign-up-text">
          <h1 className="title">How do I sign up?</h1>
          <p className="text">
            Registration couldn’t be simpler. Just 3 steps is all you need to register ownership of your product on the blockchain.
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <span class="image"></span>
            <h2>Step 1</h2>
            <p>Download and install the <b>Mighty Proof</b> application from the App or Play Store</p>
          </div>
          <div className="card">
            <span class="image"></span>
            <h2>Step 2</h2>
            <p>Scan the <b>NFC chip</b> in your collectible to register the product on the app</p>
          </div>
          <div className="card">
            <span class="image"></span>
            <h2>Step 3</h2>
            <p>Register your product to see your <b>Certificate of Authenticity</b></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SignUpSection
