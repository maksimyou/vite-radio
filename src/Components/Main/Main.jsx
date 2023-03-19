import React from 'react'
import Player from '../UI/Player/Player'
import Schering from '../UI/Schering/Schering'
import './Main.scss'
function Main({ radio, audeioRad, setAudeioRad, showImgMute, setShowImgMute, showImgPlay, setShowImgPlay, radioValue, setRadioValue, setRadioLink }) {


    return <main class="container_main">
        <div class="main_content">
            <div class="main_content_title"> Радио ВЕРА</div>
            <Player setRadioLink={setRadioLink} radioValue={radioValue} setRadioValue={setRadioValue} showImgPlay={showImgPlay} setShowImgPlay={setShowImgPlay} showImgMute={showImgMute} setShowImgMute={setShowImgMute} audeioRad={audeioRad} setAudeioRad={setAudeioRad} radio={radio} />
            <Schering />
        </div>
    </main>

}

export default Main