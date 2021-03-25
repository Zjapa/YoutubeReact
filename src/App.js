import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import VideoList from './components/VideoList/VideoList';


class App extends Component {
  state = {
    videos: [],
    activeVideo: '',
  };


  getInput = (input) => {
    !input
      ? this.setState({ videos: [], 
                        activeVideo: '' })
      : fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&type=video&key=AIzaSyA_i2L0QH1vLQtarAX0qlsL8_6if1t_7wE&q=${input}`)
        .then(req => req.json())
        .then(data => this.setState({
          videos: data.items,
         
        }));

  }



  onVideoClick = (videoId) => {
    this.setState({
      activeVideo: videoId
    })
  }



  render() {
    return (
      <>
        <Header getInput={this.getInput} />
        {this.state.activeVideo &&
          <div className="container">
            <iframe width="1200px" height="415" src={`https://www.youtube.com/embed/${this.state.activeVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>}

        <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick} />

      </>
    )
  }
}

export default App;