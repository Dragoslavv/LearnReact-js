import React, { Component } from "react";
import '../dashboard.css';
// import logout from 'login';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (){

    };


        render() {

        const idCounter = 'dashboard';

        return (
            <header className='dashboard text-center text-white d-flex' id={idCounter}>

                <h1>admin</h1>
            </header>
        );
    }
}

export default Admin;