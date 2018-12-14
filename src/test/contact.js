import React from 'react';


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
                                <span className="icon mdi mdi-facebook"></span><span>Facebook</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner" href="#">
                                <span className="icon mdi mdi-instagram"></span><span>instagram</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner" href="#">
                                <span className="icon mdi mdi-twitter"></span><span>twitter</span>
                            </a>
                        </div>
                        <div className="col">
                            <a className="social-inner" href="#">
                                <span className="icon mdi mdi-youtube-play"></span><span>google</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;