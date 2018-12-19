import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Contact extends React.Component {
    render() {

        var idCounter = 'Contact';

        return (
            <section className="contact" id={idCounter}>
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading">Questions? Contact us.</h2>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 ml-auto text-center">
                            <i className="fa fa-phone fa-3x mb-3"></i>
                            <p>069/50-13-001</p>
                        </div>
                        <div className="col-lg-6 mr-auto text-center">
                            <i className="fa fa-envelope fa-3x mb-3 "></i>
                            <p>
                                <a href="mailto:gagi.predojevic93@hotmail.com">gagi.predojevic93@hotmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-4 ml-auto text-center">
                            <ul className='list-group'>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 ml-auto text-center">
                            <ul className='list-group'>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 ml-auto text-center">
                            <ul className='list-group'>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                                <li className='list-group-item'>Loprem ipsom dolar sit</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row no-gutters social-container">
                        <div className="col">
                            <a className="social-inner mb-3" href="#">
                                <i className="fa fa-facebook fa-stack-2x"></i>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner mb-3" href="#">
                                <i className="fa fa-instagram fa-stack-2x"></i>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner mb-3" href="#">
                                <i className="fa fa-twitter fa-stack-2x"></i>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner mb-3" href="#">
                                <i className="fa fa-google fa-stack-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;