import { useState } from 'react'
import './App.scss'
import Main from './Components/Main/Main'
import Layout from './Components/Layout/Layout'
import Gallery from './Components/Gallery/Gallery'
import News from './Components/News/News'
import Contacts from './Components/Contacts/Contacts'

import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  let [radioValue, setRadioValue] = useState(0)
  let [radio, setRadio] = useState('')
  let [audeioRad, setAudeioRad] = useState();
  let [showImgMute, setShowImgMute] = useState(true);
  let [showImgPlay, setShowImgPlay] = useState(true);
  useEffect(() => {

    axios.get('https://meta.fmgid.com/get_playing.php?station=vera&date=2023:3:16&time=12:26')
      .then(function (response) {
        setRadio(response.data[0].metadata)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }, [])


  return (
    <Routes >
      <Route path='/' element={<Layout radioValue={radioValue} setRadioValue={setRadioValue} showImgPlay={showImgPlay} setShowImgPlay={setShowImgPlay} showImgMute={showImgMute} setShowImgMute={setShowImgMute} audeioRad={audeioRad} setAudeioRad={setAudeioRad} radio={radio} />}>
        <Route index element={<Main radioValue={radioValue} setRadioValue={setRadioValue} showImgPlay={showImgPlay} setShowImgPlay={setShowImgPlay} showImgMute={showImgMute} setShowImgMute={setShowImgMute} audeioRad={audeioRad} setAudeioRad={setAudeioRad} radio={radio} />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='news' element={<News />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App
