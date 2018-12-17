import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Contact extends React.Component {
    render() {

        var idCounter = 'Contact';

        return (
            <section className="contact" id={idCounter}>
                <div className="container-fluid">
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
                            <a className="social-inner" href="#">
                                <i className="fa fa-facebook"></i><span className='float-right'>Facebook</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner" href="#">
                                <i className="fa fa-instagram"></i><span>instagram</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner" href="#">
                                <i className="fa fa-twitter"></i><span>twitter</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner" href="#">
                                <i className="fa fa-google"></i><span>google</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;