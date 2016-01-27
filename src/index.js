import _ from 'lodash';
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
        // throttles fetching of videos from the API to once every 300 milliseconds
        const videoSearch = _.debounce((query) => { this.videoSearch(query) }, 300);

        return <div>
            <SearchBar onQueryChange={videoSearch} />
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
