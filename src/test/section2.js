import React from 'react';

class Section2 extends React.Component {
    render() {

        var idCounter = 'Services_slide';

        return (
            <section className="bg-primary hidden" id={idCounter}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto text-center">
                            <div className="images-about">
                                <img className="images-about-tag mb-5" src= {require('../images/asset_TV_UI.png')}/>
                                <h2 className="section-heading text-white">Watch on your TV</h2>
                                <p className="text-muted mb-0">Smart TVs, PlayStation, Xbox, Chromecast,
                                    Apple TV, Blu-ray players and more.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto text-center">
                            <div className="images-about">
                                <img className="images-about-tag mb-5"
                                     src={require('../images/asset_mobile_tablet_UI_2.png')}/>
                                <h2 className="section-heading text-white">Watch instantly  </h2>
                                <p className="text-muted mb-0">Available on phone and tablet, wherever you
                                    go.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto text-center">
                            <div className="images-about">
                                <img className="images-about-tag mb-5" src= {require('../images/asset_website_UI.png')} />
                                <h2 className="section-heading text-white">Use any computer</h2>
                                <p className="text-muted mb-0">Watch right on Netflix.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section2;

