import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import './FixedRadio.scss'
import logo from './logo.png'
import imgPlay from './music-play.svg'
import imgPause from './music-pause.svg'
import imgMaxValume from './volume-max.svg'
import imgMuteValume from './volume-mute.svg'

function FixedRadio({ radio, setAudeioRad, audeioRad, radioValue, setRadioValue, showImgMute, setShowImgMute, showImgPlay, setShowImgPlay }) {
    let [discript, setDiscript] = useState('');
    let [curentValue, setCurentValue] = useState(1);
    let audio = useRef();


    useEffect(() => {
        setDiscript(radio);
        setAudeioRad(audio)
    })

    return (
        <div class="fixpleer_controls_container">
            <div class="fixpleer_controls_content">
                <div onClick={() => {
                    if (!showImgPlay) { setShowImgPlay(true); audeioRad.current.pause(); }
                    if (showImgPlay) { setShowImgPlay(false); audeioRad.current.play(); }
                    setRadioValue(audeioRad.current.volume * 100)
                }} class="fixpleer_controls_content_play"><img src={showImgPlay ? imgPlay : imgPause} alt="" /></div>
                <div class="fixpleer_controls_content_icon"><img src={logo} alt="" /></div>
                <div class="fixpleer_controls_content_title">Радио ВЕРЫ</div>
                <div onClick={() => {
                    setShowImgMute(!showImgMute);
                    if (!showImgMute) audeioRad.current.volume = 0;
                    if (showImgMute) audeioRad.current.volume = curentValue;

                }} class="fixpleer_controls_content_mute"><img src={showImgMute ? imgMaxValume : imgMuteValume} alt="" /></div>
                <input value={radioValue} onInput={(e) => {
                    setRadioValue(e.target.value);
                    curentValue = +e.target.value / 100;
                    audeioRad.current.volume = +e.target.value / 100;
                    if (e.target.value == 0) setShowImgMute(false)
                    if (e.target.value > 0) setShowImgMute(true)
                }} class="fixpleer_controls_content_range_value" type="range" name="" id="" />
                <div class="fixpleer_controls_content_discription_wrap">
                    <div class="fixpleer_controls_content_discription">{discript}</div>
                </div>
                <audio ref={audio} class="audio_player" controls src="https://radiovera.hostingradio.ru:8007/radiovera_128"></audio>
            </div>
        </div>
    )
}

export default FixedRadio