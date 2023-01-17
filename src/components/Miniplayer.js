import React from 'react';
import ReactPlayer from 'react-player';

const Miniplayer = (props) => {
    return (
        <ReactPlayer
            url= {props.url}
            width="80%"
            height="30vh"
            controls
        />
    )
}

export default Miniplayer;