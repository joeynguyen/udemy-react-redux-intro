import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import ApiKey from './api-key.js';
import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js';
import VideoDetail from './components/VideoDetail.js';

const API_KEY = ApiKey;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(query) {
        YTSearch({ key: API_KEY, term: query}, data => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

    render() {
        return <div>
            <SearchBar onQueryChange={query => this.videoSearch(query)} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                videos={this.state.videos} 
                onVideoSelect={videoClicked => this.setState({selectedVideo: videoClicked}) }
            />
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
