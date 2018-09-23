import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FilteredList from './FilteredList';

// import the movies info from the json
import * as movies from './movies.json';

// the App component
class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <FilteredList items={movies} />
            </div>
        );
    }
}

export default App;
