import React, { useEffect } from 'react'
import { useState } from 'react'
import './Player.scss'
import logo from './logo.png'
import imgPlay from './music-play.svg'
import imgPause from './music-pause.svg'
import imgMaxValume from './volume-max.svg'
import imgMuteValume from './volume-mute.svg'
function Player({ radio, audeioRad, showImgMute, setShowImgMute, showImgPlay, setShowImgPlay, radioValue, setRadioValue }) {
    let [discript, setDiscript] = useState('');
    let [curentValue, setCurentValue] = useState(1);
    useEffect(() => {
        setDiscript(radio)
    }, [])

    return (
        <div class="main_content_audio_player_container">
            <div class="main_content_audio_player_icon"><img src={logo} alt="" /></div>
            <div class="main_content_audio_player_controls">
                <div onClick={() => {
                    if (!showImgPlay) { setShowImgPlay(true); audeioRad.current.pause(); }
                    if (showImgPlay) { setShowImgPlay(false); audeioRad.current.play(); }
                    setRadioValue(audeioRad.current.volume * 100)
                }} class="audio_player_play"><img src={showImgPlay ? imgPlay : imgPause} alt="" /></div>
                <div onClick={() => {
                    setShowImgMute(!showImgMute);
                    if (!showImgMute) { audeioRad.current.volume = 0; setRadioValue(0) }
                    if (showImgMute) audeioRad.current.volume = curentValue;

                }} class="audio_player_mute"><img src={showImgMute ? imgMaxValume : imgMuteValume} alt="" /></div>
                <input value={radioValue} onInput={(e) => {
                    setRadioValue(+e.target.value);
                    audeioRad.current.volume = +e.target.value / 100;
                    setCurentValue(+e.target.value / 100);
                    if (e.target.value == 0) setShowImgMute(false)
                    if (e.target.value > 0) setShowImgMute(true)
                }} class="styled-slider slider-progress" type="range" />

            </div>
            <div class="main_content_audio_player_discription">{discript}</div>
        </div >
    )
}

export default Player