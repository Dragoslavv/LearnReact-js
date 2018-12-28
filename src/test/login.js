import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../login.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './admin';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            user: null,
            token: null
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.email.value !== '' && this.state.password.value !== '' && this.state.password.length > 0;
    }

    handleChange = e => {
      this.setState({
         [e.target.id]: e.target.value
      });
    };

    redirect = ({ loggedIn }) => (
        <Switch>
            <Route path='/admin' component={loggedIn} render={()=>{return <Dashboard/>}}/>
            <Redirect to='/admin' />;
        </Switch>
    );

    handleSubmit = e => {
        e.preventDefault();

            fetch('http://127.0.0.1:8000/api/login?email=' + this.state.email + '&password=' + this.state.password, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                }

            }).then(response => {

                if(response.status >= 200 && response.status < 300 && response.status !== 404){

                    return response.json().then(value => {

                        if(typeof value['token'] !== 'undefined'){

                            this.setState(() => ({
                                loggedIn: true,
                                token: value['token'],
                                user: value['user']['email']
                            }));

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
        const { loggedIn, user, token } = this.state;

        if (loggedIn === true && user !== null && token !== null) {
            console.log(loggedIn,user,token);

            return this.redirect(loggedIn);
        }

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