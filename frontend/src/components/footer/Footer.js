import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50 fixed-bottom">
            <div className="container text-center">
              <small>&copy; 2020 Copyright: Zoolander.com</small>
            </div>
        </footer>
        )
    }
}
