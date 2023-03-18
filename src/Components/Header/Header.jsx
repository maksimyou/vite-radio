import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

import arrow from './angle-arrow-down.svg'
import icon from './user_icon.svg'
import logo from './logo.png'


function Header() {
    return (
        <div class="header_container">
            <div class="header_content">
                <div class="header_content_logo"><img src={logo} alt="" /></div>
                <nav class="header_content_navigation">
                    <ul class="header_content_list">
                        <li class="header_content_link"><Link to="/">Главная</Link><img src={arrow} class="icon_arrow" /></li>
                        <li class="header_content_link"><Link to="/gallery">Галерея</Link><img src={arrow} class="icon_arrow" /></li>
                        <li class="header_content_link"><Link to="/news">Новости</Link><img src={arrow} class="icon_arrow" /></li>
                        <li class="header_content_link"><Link to="/contacts">Контакты</Link><img src={arrow} class=" icon_arrow" /></li>
                    </ul>
                </nav>
                <div class="header_content_search_container">
                    <input placeholder="Введите текст" type="search" name="" id="" /> <button></button>
                </div>
                <div class="header_content_authorization"><a href="#"><img src={icon} alt="" /></a></div>
            </div>
        </div>
    )
}

export default Header