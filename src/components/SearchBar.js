import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
            />
            <br />
            Value of the input: {this.state.term}
        </div>
    }

    onInputChange(query) {
        this.setState({ term: query });
        this.props.onQueryChange(query);
    }
};
export default SearchBar;
