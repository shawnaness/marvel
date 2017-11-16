import React, { Component } from 'react';
import logo from './logo.png';

// the Header component
class Header extends Component {
    render() {
        return (
            <header className="header">
              <img src={logo} className="logo" alt="logo" />
              <h1 className="title">marvel madness</h1>
              <p>Can't keep your Marvel heroes straight? Want to know which Hollywood
              Chris is the best Chris (as determined by box office earnings)? You've
              come to the right place!</p>
              <p>Click on the logos in the Options bar below to get started!</p>
            </header>
        );
    }
}

export default Header;