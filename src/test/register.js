import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from 'react-router'
import '../login.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email_register: '',
            password_register: '',
            password_confirmation: '',
            redirect: false
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    validateForm() {
        return this.state.name.length > 0 && this.state.name.value !== '' &&  this.state.email_register.length > 0 && this.state.email_register.value !== '' && this.state.password_register.value !== '' && this.state.password_register.length > 0 && this.state.password_confirmation.value !== '' && this.state.password_confirmation.length > 0 ;
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/api/register?name=' + this.state.name + '&email=' + this.state.email_register + '&password=' + this.state.password_register + '&password_confirmation=' + this.state.password_confirmation , {
            method: "POST",
            headers: {
                'Accept': 'application/json',
            }
        }).then(response => {

            if(response.status >= 200 && response.status < 300){

                return response.json().then(value => {

                    if(typeof value['token'] !== 'undefined'){

                        window.location = "/admin";
                        // console.log(value['token'],value['user']['email']);
                    }

                });

            } else {

                return 'Api is not a function';

            }

        }).catch(error => {

            console.log('request failed', error);

        });
    };

    render() {

        var idCounter = 'Register';

        return (
            <section className="bg-primary section1 hidden" id={idCounter}>
                <div className="Login">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase text-center">
                                    <strong>Register form</strong>
                                </h1>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="name" bsSize="large">
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="email_register" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password_register" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <FormGroup controlId="password_confirmation" bsSize="large">
                            <ControlLabel>Password confirmation</ControlLabel>
                            <FormControl
                                value={this.state.password_confirmation}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Register;