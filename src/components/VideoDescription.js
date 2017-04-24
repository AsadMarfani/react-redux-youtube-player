import React from 'react';
import '../styles/VideoDescription.css';

const VideoDescription = ({video}) => {
    
    if(!video) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    console.log(video);
    const videoID = video.id.videoId;
    const url = `https://youtube.com/embed/${videoID}`;

    return (
        <div className = "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src = {url} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className = "details">
                <div> <p><b>Video Title : </b> {video.snippet.title}</p> </div>
                <div> <p> <b>Video Desciption : </b> {video.snippet.description} </p> </div>
            </div>
        </div>
    );
}

export default VideoDescription