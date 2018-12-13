import React from 'react';


class Contact extends React.Component {
    render() {

        var idCounter = 'Contact';

        return (
            <section className="contact" id={idCounter}>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading">Questions? Contact us.</h2>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 ml-auto text-center">
                            <p>069/50-13-001</p>
                        </div>
                        <div className="col-lg-6 mr-auto text-center">
                            <p>
                                <a href="mailto:gagi.predojevic93@hotmail.com">gagi.predojevic93@hotmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;