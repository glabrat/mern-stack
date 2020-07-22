import Footer from '../footer/Footer'
import React, {Component} from 'react'
import './Layout.css'

export default class Layout extends Component {
    render() {
        return (
            <div className="bg-pacifist">
                {this.props.children}
                <Footer />
            </div>
        )
    }
}