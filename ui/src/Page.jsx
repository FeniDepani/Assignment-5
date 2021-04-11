
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import Contents from './Contents.jsx';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/">Home</NavLink>
                {' | '}
                <NavLink exact to="/#/products">Product List</NavLink>
            </nav>
        );
    }
}
export default class Page extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Contents />
            </div>
        );
    }
}