import React from "react";
import InstagramEmbed from "react-instagram-embed";

class InstagramPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    onError() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <a href={this.props.postUrl}><img src={this.props.errorImage} alt="instagram post static image"/></a>
        }

        return (
            <InstagramEmbed
                url={this.props.postUrl}
                clientAccessToken='967302207538786|5fa72af91f1d4d899598f74bb9aa788d'
                hideCaption={true}
                onFailure={this.onError}
            />
        )
    }
}

export default InstagramPost;

