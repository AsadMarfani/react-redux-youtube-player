import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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

    this.searchTerm('reactjs');
  }
  handleSelectedVideo(selectedVideo){
    this.setState({
      selectedVideo
    });
  }
  searchTerm(term){
    //console.log('Term Length', term.length);
    let searchTerm = term;
    // if (term.length == 1) {
    //     searchTerm = 'reactjs';
    // }
    YTSearch({key: API_KEY, term: searchTerm},(data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }                                                                                                                                                                                                                                 
  render() {
    const videoSearch = _.debounce(( term )=> { this.searchTerm( term ) }, 300);
    return (
      <div className = "container-fluid App-body">
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDescription video = {this.state.selectedVideo}/>
        <VideoList onSelectedVideo = {this.handleSelectedVideo.bind(this)} videos = {this.state.videos} />
      </div>
    );
  } 
}
export default App;
