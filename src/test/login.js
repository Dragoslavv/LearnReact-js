import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../login.css';
import Request from 'superagent';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            users: []
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        var url = 'http://127.0.0.1:8000/api/login/';
        Request.post(url).then((response) => {
            this.setState({
                muvies: response
            })
            console.log(            this.setState({
                muvies: response
            }));
        });
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.email.value !== '' && this.state.password.value !== '' && this.state.password.length > 0;
    }

    handleChange = e => {
      this.setState({
         [e.target.id]: e.target.value
      });
    };

    handleSubmit = e => {
        alert('A name was submitted: ' + this.state.email);
        e.preventDefault();
    };

    render() {

        var idCounter = 'Login';

        return (
            <section className="bg-primary section1 hidden" id={idCounter}>
                <div className="Login">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase text-center">
                                    <strong>Login form</strong>
                                </h1>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
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
                            Login
                        </Button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Login;