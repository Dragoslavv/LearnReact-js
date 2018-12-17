import React from 'react';

class Section3 extends React.Component {
    render() {

        var idCounter = 'Price_slide';

        return (
            <section className="bg-primary hidden" id={idCounter}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-9 mx-auto text-left mb-5">
                            <h2 className="section-heading text-white">Choose one plan and watch everything on
                                Netflix.</h2>
                        </div>
                        <div className="col-lg-3 mx-auto text-left mb-5">
                            <a className="btn btn-light btn-xl" href="#">JOIN FREE FOR A MONTH</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mx-auto text-center">
                            <table className="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th scope="col" className="text-left">Monthly price after free month ends on
                                        1/1/19
                                    </th>
                                    <th scope="col">BASIC</th>
                                    <th scope="col">STANDARD</th>
                                    <th scope="col">PREMIUM</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row" className="text-left">HD available</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-left">Ultra HD available</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-left">Screens you can watch on at the same time</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-left">Watch on your laptop, TV, phone and tablet
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-left">Unlimited movies and TV shows</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-left">Cancel anytime</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-left">First month free</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section3;

