import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import logo from '../images/logo.svg';
import '../styles/App.css';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDescription from './VideoDescription';

const API_KEY = 'AIzaSyAaa8f36PNZNIuud2y6vuhJOo3Xb9Y9hqw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null   };

    YTSearch({key: API_KEY, term: 'reactjs'},(data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  handleSelectedVideo(selectedVideo){
    this.setState({
      selectedVideo
    });
  }                                                                                                                                                                                                                                 
  render() {
    return (
      <div className = "container App-body">
        <SearchBar />
        <VideoDescription video = {this.state.selectedVideo}/>
        <VideoList onSelectedVideo = {this.handleSelectedVideo.bind(this)} videos = {this.state.videos} />
      </div>
    );
  } 
}
export default App;
