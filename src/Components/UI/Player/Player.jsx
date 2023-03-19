import React, { useEffect } from 'react'
import { useState } from 'react'
import './Player.scss'
import logo from './logo.png'
import imgPlay from './music-play.svg'
import imgPause from './music-pause.svg'
import imgMaxValume from './volume-max.svg'
import imgMuteValume from './volume-mute.svg'
function Player({ radio, audeioRad, showImgMute, setShowImgMute, showImgPlay, setShowImgPlay, radioValue, setRadioValue, setRadioLink }) {
    let [discript, setDiscript] = useState('');
    let [curentValue, setCurentValue] = useState(1);
    useEffect(() => {
        setDiscript(radio)
    }, [])

    let station = [
        { radioStation: 'https://radiovera.hostingradio.ru:8007/radiovera_128', title: 'Вера' },
        { radioStation: 'https://proxy.radio.azbyka.ru/radonezh', title: 'Радонеж' },
        { radioStation: 'https://grad-petrov.ru:8094/mp3', title: 'Град Петров' },
        { radioStation: 'https://live.radioblago.ru/live-1.ogg', title: 'Радио Благо' },
        { radioStation: 'https://ancientfaith.streamguys1.com/music', title: 'Ancient Faith. Music' },
        { radioStation: 'https://ancientfaith.streamguys1.com/talk', title: 'Ancient Faith. Talk' },
        { radioStation: ' https://proxy.radio.azbyka.ru/gkpc', title: 'Καλή σας ακρόαση' },
    ]

    function setRadioStation(id) {
        setRadioLink(station[id])
    }

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
            {/*<div class="main_content_audio_player_discription">{discript}</div>*/}
            <select class='main_content_audio_player_select' onInput={(e) => {
                setRadioLink(station[e.target.value].radioStation);
                setShowImgPlay(true)
            }} name="" id="">
                <option value="0">Вера</option>
                <option value="1">Радонеж</option>
                <option value="2">Град Петров</option>
                <option value="3">Радио Благо</option>
                <option value="4">Ancient Faith. Music</option>
                <option value="5">Ancient Faith. Talk</option>
                <option value="6">Καλή σας ακρόαση</option>


            </select>
        </div >
    )
}

export default Player