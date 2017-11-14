import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FilteredList from './FilteredList';

import * as movies from './movies.json';


class App extends Component {
    render() {
        return (
            <div className="app">
                {/* 
                  The list of produce will be passed into the FilteredList
                  component the items property.
                */}
                <Header />
                <FilteredList items={movies} />
            </div>
        );
    }
}

export default App;
