import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'd4d02@gmail.com',
            password: '123456'
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);

    }

    componentWillMount() {

        fetch('http://127.0.0.1:8000/api/login?email=' + this.state.email + '&password=' + this.state.password, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
            }
        }).then(response => {

            if(response.status >= 200 && response.status < 300){
                console.log(response.json());
            } else {
                return 'test';
            }
        }).catch(error => {
            console.log('request failed', error);
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