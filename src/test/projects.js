import React from 'react';


class Projects extends React.Component {
    render() {

        var idCounter = 'Projects';

        return (
            <header className='projects text-center text-white d-flex' id={idCounter}>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="text-uppercase text-center">
                                <strong>See what’s next.</strong>
                            </h1>
                            <hr/>
                        </div>
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="mb-5">WATCH ANYWHERE. CANCEL ANYTIME.</p>
                            <a className="btn btn-primary btn-xl" href="#">CLICK ON LINK</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Projects;