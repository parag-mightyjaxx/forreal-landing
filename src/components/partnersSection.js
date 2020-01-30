import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import mightyJaxxLogo from "../images/partners/mighty-jaxx.png"
import kinjazLogo from "../images/partners/kinjaz.jpg"
import mamafakaLogo from "../images/partners/mamafaka.svg"
import cartoonNetworkLogo from "../images/partners/cartoon-network.svg"
import dcLogo from "../images/partners/dc-comics.svg"
import nickLogo from "../images/partners/nick.svg"
import foxLogo from "../images/partners/fox.svg"
import mtvLogo from "../images/partners/mtv.svg"
import epicRecordsLogo from "../images/partners/epic-records.svg"
import viacomLogo from "../images/partners/viacom.svg"
import sesameWorkshopLogo from "../images/partners/sesame-workshop.jpg"
import onePieceLogo from "../images/partners/one-piece.svg"
import antaLogo from "../images/partners/anta.svg"
import toeiAnimationLogo from "../images/partners/toei-animation.svg"
import gShockLogo from "../images/partners/g-shock.svg"
import looneyTunesLogo from "../images/partners/looney-tunes.png"
import itLogo from "../images/partners/it.svg"
import wbLogo from "../images/partners/wb.svg"
import newBalanceLogo from "../images/partners/new-balance.svg"
import smileyLogo from "../images/partners/smiley.jpg"

const PartnerSection = () => {

  return (
    <section id="partner-section">
      <div className="container">
        <h1 className="title">We work with cool people</h1>
        <div className="partner-logos">
          <img className="logo" src={mightyJaxxLogo} />
          <img className="logo" src={kinjazLogo} />
          <img className="logo" src={mamafakaLogo} />
          <img className="logo" src={cartoonNetworkLogo} />
          <img className="logo" src={dcLogo} />
          <img className="logo" src={nickLogo} />
          <img className="logo" src={foxLogo} />
          <img className="logo" src={mtvLogo} />
          <img className="logo" src={epicRecordsLogo} />
          <img className="logo" src={viacomLogo} />
          <img className="logo" src={sesameWorkshopLogo} />
          <img className="logo" src={onePieceLogo} />
          <img className="logo" src={antaLogo} />
          <img className="logo" src={toeiAnimationLogo} />
          <img className="logo" src={gShockLogo} />
          <img className="logo" src={looneyTunesLogo} />
          <img className="logo" src={itLogo} />
          <img className="logo" src={wbLogo} />
          <img className="logo" src={newBalanceLogo} />
          <img className="logo" src={smileyLogo} />
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
