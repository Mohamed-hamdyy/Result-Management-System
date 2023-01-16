import React from 'react';
import ReactPlayer from 'react-player';

const Miniplayer = (props) => {
    return (
        <ReactPlayer
            url= {props.url}
            width="50%"
            height="40vh"
            controls
        />
    )
}

export default Miniplayer;