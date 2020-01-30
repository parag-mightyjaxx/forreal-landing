import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/heroSection"
import SignUpSection from "../components/signUpSection"
import ImplementationSection from "../components/implementationSection"
import PartnerSection from "../components/partnersSection"
import ContactSection from "../components/contactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Mighty Proof" />
    <HeroSection />
    <SignUpSection />
    <ImplementationSection />
    <PartnerSection />
    <ContactSection />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
