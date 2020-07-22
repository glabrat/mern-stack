import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top text-white" alt="logo" loading="lazy" />
                        oolander
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Add new animal</Link>
                        </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        )
    }
}
