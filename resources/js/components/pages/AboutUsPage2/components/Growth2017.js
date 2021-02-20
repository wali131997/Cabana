import React, { Component } from 'react';

class Growth2017 extends Component {
    render() {
        const {year}=this.props
        return (
            <div className="container-fluid ">
                <div className="row animated fadeIn">
                    <div className="col-md-6 col-sm-12">
                      <div className="growthContentText">Cabana Capitals started it's successful journey in 2017 and within first 6 months more than 30,000 clients registered and became a part of Cabana Capitals ever growing family.</div>
                     <div className="centerDiv"> <img src="/assets/images/world.png" alt="world" className="worldImg"></img></div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="growthBigYearText d-none d-lg-inline">{year}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Growth2017;