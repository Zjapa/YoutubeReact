import React, { Component } from 'react';
import './VideoList.css';
import Video from '../Video/Video'
import uuid from 'react-uuid'

class VideoList extends Component {
    
    render() {
        return (
            <div className="container">
                <section className="video-list">
                    {this.props.videos.map(video => {
                        const {videoId} = video.id;
                        return (
                            <Video blabla={video} key={uuid()} onVideoClick={()=> this.props.onVideoClick(videoId)} />
                        )
                    })}
                </section>
            </div>
        );
    }
}

export default VideoList;