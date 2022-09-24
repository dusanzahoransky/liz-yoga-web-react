import React from "react";

function YoutubeEmbed(props) {
    return (
        <iframe src={props.postUrl}
                title={props.title} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
    );
}

export default YoutubeEmbed;
