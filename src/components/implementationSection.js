import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import heroImage from "../images/hero-image.svg"

const ImplementationSection = () => {

  return (
    <section id="implementation-section">
      <div className="container">
        <div className="implementation-section-1">
          <div className="implementation-text-1">
            <h1 className="title">How we keep your collectibles secure</h1>
            <p className="text">
              Security and authenticity is the primary focus of our application, while making the process as seamless as possible for users. 
            </p>
          </div>
        </div>
        <div className="implementation-section-2">
          <div className="implementation-text-2">
            <p className="text">
              Mighty Proof is a proprietary authentication and registration platform for physical collectibles on the blockchain network. 
            </p>
            <p className="text">
              Each product is chipped with a tamper-proof NFC that uniquely identifies each product. Once a collectible has been registered using the app, its ownership history is recorded to the blockchain, storing the ownership history forever. 
            </p>
            <p className="text">
              In the event of a transfer of ownership, the history of product ownership for that unique collectible will still be preserved. So using the Mighty Proof App, you can see everyone who has ever owned the product since it was manufactured. 
            </p>
            <p className="text">
              This means that anytime you scan a Mighty Proof enabled collectible, you are guaranteed a genuine, limited edition product.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImplementationSection
