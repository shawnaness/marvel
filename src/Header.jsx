import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
    render() {
        return (
            <header className="header">
              <img src={logo} className="logo" alt="logo" />
              <h1 className="title">marvel madness</h1>
              <p>Can't keep your Marvel heroes straight? Want to know which Hollywood
              Chris is the best Chris (as determined by box office earnings)? You've
              come to the right place!</p>
            </header>
        );
    }
}

export default Header;