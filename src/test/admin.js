import React, { Component } from "react";
import '../dashboard.css';

// import logout from 'login';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.renderLinks = this.renderLinks.bind(this);
        console.log(super(props))
    }

    renderLinks() {
        if(this.props) {
            return (
                <li className="nav-item">
                    <a href="/signout" className="nav-link">Sign Out</a>
                </li>
            )
        }
        else {
            return (
                [
                    <li className="nav-item">
                        <a href="/signin" className="nav-link">Sign In</a>
                    </li>,
                    <li className="nav-item">
                        <a href="/signup" className="nav-link">Sign Up</a>
                    </li>
                ]
            )
        }
    }


    render() {

        const idCounter = 'dashboard';

        return (
            <header className='dashboard text-center text-white d-flex' id={idCounter}>
                <nav className='navbar navbar-default'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <ul className='nav navbar-nav'>
                                {this.renderLinks()};
                            </ul>
                        </div>
                    </div>
                </nav>
                <h1>admin</h1>
            </header>
        );
    }
}

export default Admin;