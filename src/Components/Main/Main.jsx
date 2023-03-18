import React from 'react'
import Player from '../UI/Player/Player'
import './Main.scss'
function Main({ radio, audeioRad, setAudeioRad, showImgMute, setShowImgMute, showImgPlay, setShowImgPlay, radioValue, setRadioValue }) {


    return <main class="container_main">
        <div class="main_content">
            <div class="main_content_title"> Радио ВЕРА</div>
            <Player radioValue={radioValue} setRadioValue={setRadioValue} showImgPlay={showImgPlay} setShowImgPlay={setShowImgPlay} showImgMute={showImgMute} setShowImgMute={setShowImgMute} audeioRad={audeioRad} setAudeioRad={setAudeioRad} radio={radio} />
        </div>
    </main>

}

export default Main