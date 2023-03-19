import React from 'react'
import axios from 'axios'
import './NotFound.scss'
import load from './loader.gif'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function NotFound() {
    let [cats, setCats] = useState();
    let [loading, setLoading] = useState(true);
    let param = useParams()
    useEffect(() => {

        axios.get('https://aws.random.cat/meow')
            .then(function (response) {
                if (response.statusText == "OK") setLoading(false)
                setCats(response.data.file)
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
        <div className='not-found_container'>
            <div className="not-found_content">
                {loading ?
                    <img className='loading_not-found' src={load} alt="" />
                    :
                    <><h1 className='not-found_content_title'>Страница {param['*']}<br /> 404 не найдена</h1>
                        <img className='not-found_img' src={cats} alt="" /></>}
            </div>
        </div >
    )
}

export default NotFound