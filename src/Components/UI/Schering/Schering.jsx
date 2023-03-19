import React from 'react'
import facebook from './icons/FB_icon.png'
import google from './icons/GOOGLE_icon.png'
import twitter from './icons/TWITTER_icon.png'
import email from './icons/email.png'
import oneklass from './icons/odnoklassniki_icon.png'
import vkontakte from './icons/rus-vk.png'
import viber from './icons/vibersocial.png'
import telegram from './icons/telegram_icon.png'
import './Schering.scss'
function Schering() {

    //let dataSchering = {
    //    url
    //    title
    //    desc
    //    image
    //};



    return (
        <div className='schering_container'>
            <div className="schering_container_title">Поделитесь:</div>
            <div className="schering_content">
                <div className="icon-shering schering_content_vk"><a href="http://vk.com/share.php?url={$url}&title={$titleVk}&description={$desc}&image={$image}&noparse=true"><img src={vkontakte} alt="" /></a></div>
                <div className="icon-shering schering_content_twitter"><a href="https://twitter.com/share?url={$url}&text={$title}&hashtags={$hashtags}&via={$account}"><img src={twitter} alt="" /></a></div>
                <div className="icon-shering schering_content_ok"><a href="https://connect.ok.ru/offer?url={$url}"><img src={oneklass} alt="" /></a></div>
                <div className="icon-shering schering_content_fb"><a href="https://www.facebook.com/sharer/sharer.php?u={$url}&picture={$image}"><img src={facebook} alt="" /></a></div>
                <div className="icon-shering schering_content_google"><a href="https//plus.google.com/share?url={$url}"><img src={google} alt="" /></a></div>
                <div className="icon-shering schering_content_my-world"><a href="http://connect.mail.ru/share?url={$url}&title={$title}&description={$desc}&image_url={$image}"><img src={email} alt="" /></a></div>
                <div className="icon-shering schering_content_viber"><a href="viber://forward?text=<Your Text>  "><img src={viber} alt="" /></a></div>
                <div className="icon-shering schering_content_telegram"><a href="https://t.me/share/url?url={url}&text={text}"><img src={telegram} alt="" /></a></div>
            </div>
        </div>
    )
}

export default Schering