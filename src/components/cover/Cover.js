import React from 'react'
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Sigi Andre Diaz Quiroz</h1>
            <p>Developer | Designer | Content Creator | Entrepeneur</p>
        </div>
    )
}

export default Cover;
