import { Link } from 'react-router-dom';
import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2';

class PromotionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promotions:[]
        };
    }
    componentDidMount() {
        Axios.post('/api/get_all_promotions').then(res=>{
            this.setState({
                promotions:res.data
            })
        })
    }
    delete_promotion(id){
        Axios.post('/api/delete_promotion',{id:id}).then(res=>{
            this.componentDidMount();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Promotion Deleted Successfull',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Promotions List</h2>
                </div>
                <div >
                <table className="table table-bordered table-hover table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Title</th>
                            <th>Link</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.promotions.map((data,index)=>{
                               return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.title}</td>
                                    <td>{data.link}</td>
                                    <td>{data.type == 1 ? 'All Countries' : 'Specific Countries'}</td>
                                    <td className={data.status == 1 ? 'text-success text-bold' : 'text-danger text-bold'}>{data.status == 1 ? 'Active' : 'Draft'}</td>
                                    <td><Link to={`/adminpanel/edit-promotion/${data.id}`}>
                                                <button className="btn btn-warning"> <i style={{color:'#ffffff'}} className="far fa-edit"> </i></button>
                                                    </Link></td>
                                    <td>
                                    <button onClick={this.delete_promotion.bind(this,data.id)} className="btn btn-danger"> <i style={{color:'#ffffff'}} className="far fa-trash-alt"> </i></button>

                                    </td>
                                </tr>
                               )
                           })
                       }
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default PromotionsList;
