import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
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
                <header className="header">
                  <img src={logo} className="logo" alt="logo" />
                  <h1 className="title">marvel madness</h1>
                </header>
                <FilteredList items={movies} />
            </div>
        );
    }
}

export default App;
