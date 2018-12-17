import React from 'react';


class DuoNavigature extends React.Component {

    constructor(props) {
        super(props);

        this.handleClickAbout = this.handleClickAbout.bind(this);
        this.handleClickServices = this.handleClickServices.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);

    }

    handleClickAbout(e) {
        e.preventDefault();
        var elementAbout = document.getElementById('About_slide');
        var elementServices = document.getElementById('Services_slide');
        var elementPrices = document.getElementById('Price_slide');

        var nav1 = document.getElementById('link_1');
        var nav2 = document.getElementById('link_2');
        var nav3 = document.getElementById('link_3');

        // Added functionality for sub navigation
        elementAbout.classList.add('shown');
        elementServices.classList.add("hidden");
        elementPrices.classList.add("hidden");
        elementServices.classList.remove("shown");
        elementPrices.classList.remove("shown");

        //Added border on bottom if is select link
        nav1.parentElement.classList.add('border-bottom-default');
        nav2.parentElement.classList.remove('border-bottom-default');
        nav3.parentElement.classList.remove('border-bottom-default');

    }

    handleClickServices(e) {
        e.preventDefault();
        var elementAbout = document.getElementById('About_slide');
        var elementServices = document.getElementById('Services_slide');
        var elementPrices = document.getElementById('Price_slide');

        var nav1 = document.getElementById('link_1');
        var nav2 = document.getElementById('link_2');
        var nav3 = document.getElementById('link_3');

        // Added functionality for sub navigation
        elementAbout.classList.remove('shown');
        elementAbout.classList.add('hidden');
        elementServices.classList.remove("hidden");
        elementServices.classList.add("shown");
        elementPrices.classList.remove("shown");
        elementPrices.classList.add("hidden");

        //Added border on bottom if is select link
        nav1.parentElement.classList.remove('border-bottom-default');
        nav2.parentElement.classList.add('border-bottom-default');
        nav3.parentElement.classList.remove('border-bottom-default');

    }

    handleClickContact(e) {
        e.preventDefault();
        var elementAbout = document.getElementById('About_slide');
        var elementServices = document.getElementById('Services_slide');
        var elementPrices = document.getElementById('Price_slide');

        var nav1 = document.getElementById('link_1');
        var nav2 = document.getElementById('link_2');
        var nav3 = document.getElementById('link_3');

        // Added functionality for sub navigation
        elementAbout.classList.remove('shown');
        elementAbout.classList.add('hidden');
        elementServices.classList.remove("shown");
        elementServices.classList.add("hidden");
        elementPrices.classList.remove("hidden");
        elementPrices.classList.add("shown");

        //Added border on bottom if is select link

        nav1.parentElement.classList.remove('border-bottom-default');
        nav2.parentElement.classList.remove('border-bottom-default');
        nav3.parentElement.classList.add('border-bottom-default');

    }

    render() {

        const idCounter = 'Services';

        return (
            <section className="services" id={idCounter}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto border-bottom-default">
                                <a href="#About_slide" onClick={this.handleClickAbout} id="link_1" className="menu-nav-sel">
                                    <h3 className="mb-3">About me</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <a href="#Services_slide" onClick={this.handleClickServices} id="link_2" className="menu-nav-sel">
                                    <h3 className="mb-3">Services</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <a href="#Price_slide" onClick={this.handleClickContact} id="link_3" className="menu-nav-sel">
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