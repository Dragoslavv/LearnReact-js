import React from 'react';


class DuoNavigature extends React.Component {
    render() {

        var idCounter = 'Services';

        return (
            <section className="services" id={idCounter}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto border-bottom-default">
                                <a href="" id="link_1" className="menu-nav-sel">
                                    <h3 className="mb-3">About me</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <a href="#watch" id="link_2" className="menu-nav-sel">
                                    <h3 className="mb-3">Services</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <a href="#price" id="link_3" className="menu-nav-sel">
                                    <h3 className="mb-3">Contact</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DuoNavigature;