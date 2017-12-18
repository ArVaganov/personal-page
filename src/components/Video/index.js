import React from 'react'
import VideoMP4 from './programming.mp4'
import VideoWEBM from './programming.webm'
import './Video.css'

const Video = (props) => {
    return (
        <div className="video__container">
            <div className="overlay"></div>
            <div id="trailer" className="is_overlay">
                <video className="video__sources" autoPlay loop="loop" preload="auto" muted >
                        <source src={VideoMP4} type="video/mp4" />
                        <source src={VideoWEBM} type="video/webm" />
                        Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Video