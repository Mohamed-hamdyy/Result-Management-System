import React from 'react';
import ReactPlayer from 'react-player';

const Player = (props) => {
    return (
        <ReactPlayer
            url= {props.url}
            width="100%"
            height="80vh"
            controls
        />
    )
}

export default Player;