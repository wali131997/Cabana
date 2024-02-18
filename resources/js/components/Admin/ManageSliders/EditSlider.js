import React, { Component } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { img_baseurl } from '../../Configs/BaseUrls';

class AddSlider extends Component {
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
            content:'',
            excluded:false,
            image:'noimage.png',
            upload_progress:0,
            id:this.props.match.params.id,
            index:1
        }
    }
    componentDidMount(){
        Axios.post('/api/get_countries').then(res=>{
            this.setState({
                countries:res.data
            })
        })
        Axios.post('/api/get_slider_by_id',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                selected_countries:JSON.parse(res.data.countries) ,
                type:res.data.type,
                content:res.data.content,
                title:res.data.title,
                excluded:res.data.excluded,
                image:res.data.image,
                status:res.data.status,
                index:res.data.index
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
    content(e){
        this.setState({
            content:e.target.value
        })
    }
    index(e){
        this.setState({
            index:e.target.value
        })
    }
    status(e){
        this.setState({
            status:e.target.value
        })
    }
    excluded(e){
        this.setState({
            excluded: !this.state.excluded
        })
    }

    countries(e){
        console.log(e)
        this.setState({
            selected_countries:e
        })
    }
    AddPromotion(){
        Axios.post('/api/update_slider',this.state).then(res=>{
            console.log(res);
            if(res.data.status == 200){
                toast.success('Slider Added SuccessFully');
            }else{
                toast.error('Error - '+res.data.msg);

                this.setState({
                    error_string:res.data.msg
                })
            }
        })
    }

        upload_image(event) {
            const formData = new FormData();
            formData.append('image', event.target.files[0]);
            let Configs = {
                headers: {
                    'content-type': false,
                    'mime-type': "multipart/form-data",
                },
                onUploadProgress: progressEvent => {this.setState({
                    upload_progress: Math.round( (progressEvent.loaded * 100) / progressEvent.total )
                })}
            }
           toast.loading('Uploading image...');
            Axios.post('/api/upload_image', formData, Configs).then(res => {
                toast.remove();
                if (res.data.status == 200) {
                    toast.success('Image Uploaded.')
                    this.setState({
                        image: res.data.url
                    })
                } else {
                    toast.error('Error - Image not uploaded.')

                }
            })

        }


    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Add New Slider</h2>
                </div>
                <div >
                    <div className="card p-3 content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Slider Title</label>
                                <input value={this.state.title} onChange={this.title.bind(this)}  type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Slider Image</label>
                                <input  onChange={this.upload_image.bind(this)}  type="file" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group input_div col-md-12 text-center">
                                <img src={img_baseurl+this.state.image} style={{width:'30%'}}></img>
                            </div>
                            <div class="form-group input_div col-md-12">
                                <label className="input_label" for="exampleInputEmail1">Slider Content</label>
                                <textarea  value={this.state.content} style={{width:'100%',height:'300px'}}  onChange={this.content.bind(this)}  type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Slider Regeion Type</label>
                                <select  value={this.state.type} onChange={this.type.bind(this)}  class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" >
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
                                  <div class="form-group input_div col-md-12 mt-3 d-flex">
                                    <input className="mt-1 mr-2" checked={this.state.excluded}  onChange={this.excluded.bind(this)}  type="checkbox"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <label className="input_label" for="exampleInputEmail1">excluded</label>

                                </div>
                                </div>
                               :
                               null
                            }
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Slider Index</label>
                                <input value={this.state.index} onChange={this.index.bind(this)}  type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
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

export default AddSlider;
