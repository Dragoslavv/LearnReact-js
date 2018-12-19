import React from 'react';
import { Player } from 'video-react';

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.handleLink = this.handleLink.bind(this);
    }
    handleLink(){
        const loginScroll = document.getElementById('Login');
        const backLoginButton = document.getElementById('backLoginButton');
        const closeButton = document.getElementById('closeButton');
        loginScroll.classList.remove('hidden');
        backLoginButton.classList.add('hidden');
        closeButton.classList.remove('hidden');
    }

    render() {

        var idCounter = 'Projects';

        return (
            <header className='projects text-center text-white d-flex' id={idCounter}>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">

                            <h1 className="text-uppercase text-center">
                                <strong>Do you want to see video?</strong>
                            </h1>
                            <hr/>
                        </div>
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="mb-5">WATCH ANYWHERE. CANCEL ANYTIME.</p>
                            <a className="btn btn-primary btn-xl" onClick={this.handleLink}>CLICK ON LINK</a>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Projects;