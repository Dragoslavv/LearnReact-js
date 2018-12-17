import React from 'react';

class Section extends React.Component {
    render() {

        var idCounter = 'About_slide';

        return (
            <section className="bg-primary section1 shown" id={idCounter}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-left mb-5">
                            <h2 className="section-heading text-white">If you decide Netflix isn't for you - no problem. No
                                commitment. Cancel online anytime.</h2>
                            <hr className="light my-4"/>
                            <a className="btn btn-light btn-xl" href="#">JOIN FREE FOR A MONTH</a>
                        </div>
                        <div className="col-lg-6 mx-auto text-center">
                            <div className="images-about">
                                <img className="images-about-tag" src={require("../images/cancelanytime.png")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;