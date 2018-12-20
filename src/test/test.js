import React from 'react';

class Navigature extends React.Component {
    constructor(props) {
        super(props);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.renderRedirectRegister = this.renderRedirectRegister.bind(this);
        this.closeFormRegister = this.closeFormRegister.bind(this);

    }

    renderRedirectRegister(){
        const registerScroll = document.getElementById('Register');
        const backRegisterButton = document.getElementById('backRegisterButton');
        const closeButtonRegister = document.getElementById('closeButtonRegister');
        registerScroll.classList.remove('hidden');
        backRegisterButton.classList.add('hidden');
        closeButtonRegister.classList.remove('hidden');
    }
    closeFormRegister(){
        const registerScroll = document.getElementById('Register');
        const backRegisterButton = document.getElementById('backRegisterButton');
        const closeButtonRegister = document.getElementById('closeButtonRegister');
        registerScroll.classList.add('hidden');
        backRegisterButton.classList.remove('hidden');
        closeButtonRegister.classList.add('hidden');
    }

    renderRedirect() {
        const loginScroll = document.getElementById('Register');
        const backLoginButton = document.getElementById('backRegisterButton');
        const closeButton = document.getElementById('closeButtonRegister');
        loginScroll.classList.remove('hidden');
        backLoginButton.classList.add('hidden');
        closeButton.classList.remove('hidden');
    }

    closeForm() {
        const loginScroll = document.getElementById('Login');
        const backLoginButton = document.getElementById('backLoginButton');
        const closeButton = document.getElementById('closeButton');
        loginScroll.classList.add('hidden');
        backLoginButton.classList.remove('hidden');
        closeButton.classList.add('hidden');
    }


    render() {

        var backLoginButton = 'backLoginButton',
            backRegisterButton = 'backRegisterButton',
            closeButtonRegister     = 'closeButtonRegister',
            closeButton     = 'closeButton';


        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#Services">About me <span className="sr-only">(current)</span></a>
                        </li>
                        <span className='backslash'>|</span>
                        <li className="nav-item ">
                            <a className="nav-link" href="#Contact">Contact </a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-danger my-2 my-sm-0" id={backLoginButton} type='submit' onClick={this.renderRedirect}>Login</button>
                        <button className="btn btn-outline-danger my-2 my-sm-0" id={backRegisterButton} type='submit' onClick={this.renderRedirectRegister}>Register</button>
                        <button className="btn btn-outline-primary hidden my-2 my-sm-0" id={closeButton} type='submit' onClick={this.closeForm}>Close login form</button>
                        <button className="btn btn-outline-primary hidden my-2 my-sm-0" id={closeButtonRegister} type='submit' onClick={this.closeFormRegister}>Close register form</button>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigature;