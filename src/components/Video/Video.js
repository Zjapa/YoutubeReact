import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div className="video" onClick={this.props.onVideoClick}>
                <img src={this.props.blabla.snippet.thumbnails.high.url} alt="logo" />
                <h2>{this.props.blabla.snippet.title}</h2>
            </div>
        );
    }
}

export default Video;