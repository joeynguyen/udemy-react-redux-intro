import React from 'react';
import ReactDOM from 'react-dom';

import ApiKey from './api-key.js';

const API_KEY = ApiKey;

const App = () => {
    return <div>Hello there</div>
};

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
