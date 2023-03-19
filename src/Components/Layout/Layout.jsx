import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FixedRadio from '../FixedRadio/FixedRadio'


function Layout({ radio, audeioRad, setAudeioRad, showImgMute, setShowImgMute, showImgPlay, setShowImgPlay, radioValue, setRadioValue, radioLink }) {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <FixedRadio radioLink={radioLink} setAudeioRad={setAudeioRad} showImgPlay={showImgPlay} setShowImgPlay={setShowImgPlay} showImgMute={showImgMute} setShowImgMute={setShowImgMute} radioValue={radioValue} setRadioValue={setRadioValue} audeioRad={audeioRad} radio={radio} />
        </>
    )
}

export default Layout