import React, { useState, useEffect } from 'react'
import Axios from 'axios'


export default function Image(props) {
    const date = props;
    const [imgData, setImgData] = useState([]); //set image data to empty array
    //import img data on load
    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.date}`)
            .then(res => {
                setImgData(res.data)
            })
            .catch(err => console.log('There is an error with the Axios get'))
    }, [date]) //only render when date changes

    return (
        <div className='imgContainer'>
            <h2>{imgData.title}</h2>
            <div>
                <img src = {imgData.url}></img>
            </div>
            <div className='dateCopyright'>
                <p>{imgData.date} · ©{imgData.copyright}</p>
            </div>
            <h2>Description</h2>
            <p>{imgData.explanation}</p>
        </div>
    )
}