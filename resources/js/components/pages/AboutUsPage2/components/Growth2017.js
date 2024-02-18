import React, { Component } from 'react';

class Growth2017 extends Component {
    render() {
        const {year}=this.props
        return (
            <div className="container-fluid ">
                <div className="row animated fadeIn">
                    <div className="col-md-6 col-sm-12">
                      <div className="growthContentText" dangerouslySetInnerHTML={{__html:this.props.content}}></div>
                     <div className="centerDiv"> <img  src={`/assets/images/${this.props.img}`} alt="world" className="worldImg"></img></div>
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
