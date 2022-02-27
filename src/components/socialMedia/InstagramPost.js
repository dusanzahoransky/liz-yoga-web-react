import React from "react";
import InstagramEmbed from "react-instagram-embed";

function InstagramPost(props) {
    return (
        <InstagramEmbed
            url={props.postUrl}
            clientAccessToken='967302207538786|5fa72af91f1d4d899598f74bb9aa788d'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    );
}

export default InstagramPost;
