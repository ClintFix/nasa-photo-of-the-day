import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const ImgContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`

const ImgDiv = styled.div `
    img {
        &:hover {
            border: 1px solid lightgray;
            box-shadow: 5px 5px 5px lightgray;
        }
    }
    
`

const DateCopyRight = styled.div `
    color: ${props => props.theme.secondaryColor};
    font-size: 0.8rem;
    font-weight: bold;
`

const Description = styled.p `
    width: 90%;
    margin: 0 auto;
    line-height: 1.5;
    &:hover {
        color: red;
    }
    padding-bottom: 20%;
`


export default function Image(props) {
    const { date, setDate } = props;
    const [imgData, setImgData] = useState([]); //set image data to empty array
    //import img data on load
    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => {
                setImgData(res.data)
                
            })
            .catch(err => {
                console.log('There is an error with the Axios get')
                
            })
    }, [date]) //only render when date changes

    return (
        <ImgContainer>
            <h2>{imgData.title}</h2>
            <ImgDiv>
                {
                    imgData.media_type === 'video' ? <iframe width="420" height="315" src={imgData.url}></iframe> : <img src = {imgData.url}></img> 
                }
            </ImgDiv>
            <DateCopyRight>
                <p>{imgData.date} · ©{imgData.copyright}</p>
            </DateCopyRight>
            <h2>Description</h2>
            <Description>{imgData.explanation}</Description>
        </ImgContainer>
    )
}