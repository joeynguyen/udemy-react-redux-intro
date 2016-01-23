import React from 'react';
import ReactDOM from 'react-dom';
import ApiKey from './api-key.js';
import SearchBar from './components/SearchBar.js';

const API_KEY = ApiKey;

const App = () => {
    return <div>
        <SearchBar />
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
