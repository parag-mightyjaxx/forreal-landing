import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function DetectAndServe(){
  let os = getMobileOperatingSystem();
  if (os == "Android") {
      window.location.href = "https://play.google.com/store/apps/details?id=com.app.forreal"; 
  } else if (os == "iOS") {
      window.location.href = "https://apps.apple.com/sg/app/forreal-app/id1506653955";
  } else {
      window.location.href = "https://forreal.technology/";
  }
}
const SecondPage = () => {

  DetectAndServe();

  return (
  <Layout>
    <SEO title="Download the forreal app now" />
    <p>Taking you to the download page now.</p>
    <p>If you are not automatically redirected, use the links on the home page.</p>
    <Link to="/" style={{ color: "white" }}>Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
