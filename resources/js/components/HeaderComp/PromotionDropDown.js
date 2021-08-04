import Axios from "axios";
import React, { Component } from "react";
import { a } from "react-router-dom";
import {connect} from 'react-redux'
class PromotionDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promotions: []
        }
        console.log(this.props);
    }
    // componentDidMount() {
    //     Axios.post('/api/get_promotions')
    //         .then(res => {
    //             this.setState({
    //                 promotions:res.data.promotions
    //             })
    //         })
    // }
    render() {
        return (
            <div>
                <div className="headerDropDown">
                    <div
                        className="headerDropDownItemDiv offset-md-2"
                        onClick={this.props.dropDownHandler}
                    >
                        <h5 className="headerDropDownTitle">PROMOTION</h5>
                        {
                            this.props.promotions.map((data,index)=>{
                                return(
                                    <a href={data.link} className="headera">
                                        <div className="headerDropDownItem">{data.title}</div>
                                    </a>
                                )
                            })
                        }

                        {
                            this.props.promotions.length == 0 ?
                            <div className="headerDropDownItem">Promotions not available</div>
                            : null
                        }

                    </div>
                    {
                        this.props.country != 'India' ?
                        <div
                        className="headerDropDownItemDiv"
                        onClick={this.props.dropDownHandler}
                    >
                        <h5 className="headerDropDownTitle mt-4">REFER</h5>

                        <a href="/reffer-friend" className="headera ">
                            <div className="headerDropDownItem">Refer a Friend</div>
                        </a>
                        <a href="/reffer-friend" className="headera opacityZero">
                            <div className="headerDropDownItem">Refer a Friend</div>
                        </a>
                    </div>
                    : null
                    }

                    {/* <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PATNERSHIP</h5>
            <a href="/patnership" className="headera">
              <div className="headerDropDownItem">Patnership </div>
            </a>
          </div> */}
                    <div className="headerDropDownImgDiv">
                        <img
                            className="headerDropDownImg"
                            src="/assets/images/promotionsDrop.svg"
                            style={{ width: "180px" }}
                            alt="promotion"
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        promotions:state.promotion,
        country:state.country
    }
}

export default connect(mapStateToProps)(PromotionDropDown);
