import Axios from 'axios';
import React, { Component } from 'react';
import HeroSection from '../AboutUsPage/components/HeroSection';

class TraidingMemory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        };
    }
     
    componentDidMount(){
        Axios.post('/api/get_pamm_account_detail/'+this.props.match.params.id).then(res=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        return (
            <div>
                <HeroSection title="TRADING MANAGER DETAILS" />
                <div className="container mt-5 mb-5">
                    <div className="card p-4">
                        <div className="d-flex">
                            <img className="person_img" src="/assets/images/person.png"/> 
                            <h4 className="nickname">{this.state.data.nickname}</h4>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TraidingMemory;
