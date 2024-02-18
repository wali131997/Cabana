import React, { Component } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Axios from 'axios';
import Swal from 'sweetalert2';

class AddPromotions extends Component {
    constructor(props) {
        super(props);
        this.state ={
            countries:[],
            type:1,
            selected_countries:[],
            error_string:'',
            title:'',
            link:'',
            status:0,

        }
    }
    componentDidMount(){
        Axios.post('/api/get_countries').then(res=>{
            this.setState({
                countries:res.data
            })
        })
    }
    type(e){
        this.setState({
            type:e.target.value
        })
    }
    title(e){
        this.setState({
            title:e.target.value
        })
    }
    link(e){
        this.setState({
            link:e.target.value
        })
    }
    status(e){
        this.setState({
            status:e.target.value
        })
    }

    countries(e){
        console.log(e)
        this.setState({
            selected_countries:e
        })
    }
    AddPromotion(){
        Axios.post('/api/add_promotion',this.state).then(res=>{
            if(res.data.status == 200){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Promotion Added Successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }else{
                this.setState({
                    error_string:res.data.msg
                })
            }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Add New Promotion</h2>
                </div>
                <div >
                    <div className="card p-3 content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Promtoion Title</label>
                                <input onChange={this.title.bind(this)}  type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Promtoion Link</label>
                                <input  onChange={this.link.bind(this)}  type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Promtoion Type</label>
                                <select onChange={this.type.bind(this)}  class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" >
                                    <option value={1}>All Countries</option>
                                    <option value={2}>Specific Countries</option>
                                </select>
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Status</label>
                                <select value={this.state.status}  onChange={this.status.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" >
                                    <option value={1}>Active</option>
                                    <option value={0}>Draft</option>
                                </select>
                            </div>
                            {
                                this.state.type == 2 ?
                                <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Select Countries</label>
                                    <Multiselect
                                    options={this.state.countries} // Options to display in the dropdown
                                    selectedValues={this.state.selected_countries} // Preselected value to persist in dropdown
                                    onSelect={this.countries.bind(this)} // Function will trigger on select event
                                    onRemove={this.countries.bind(this)}
                                    displayValue="name" // Property name to display in the dropdown options
                                    />
                                </div>
                               :
                               null
                            }
                        </div>
                        {
                                this.state.error_string != '' ?
                                <p className="text-danger text-center">{this.state.error_string}</p>
                                : null
                            }
                        <div className="row col-md-12">

                        <div class="form-group input_div col-md-6">
                            <button onClick={this.AddPromotion.bind(this)} className="btn btn-success rounded">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPromotions;
