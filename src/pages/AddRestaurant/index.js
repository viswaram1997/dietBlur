import React, { Component } from 'react'
import Headers from "../../component/Header";
import icon from "../../assets/image/add Icon.png";
import StateDetails from "./state";
import Alert from 'react-s-alert';
import { Form, Input, TextArea, Button, Dropdown, Card, Icon, Header, Sticky, Tab, Modal, Image } from 'semantic-ui-react';
import state from "./country";
import UserPage from "../../service/UserPage";

import breakfast from "../../assets/image/brea.jpg";
import lunch from "../../assets/image/lunch.jpg";
import dinner from "../../assets/image/dinner.jpg";
import Label from 'semantic-ui-react/dist/commonjs/elements/Label/Label';
import AddCombo from "../../component/addcombo";
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import UserHeader from "../../component/userpageHeader";
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
export default class AddRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editpage: false,
            modalStatus: false,
            restaurantName: "",
            restaurantInfo: "",
            area: "",
            city: "",
            state: "",
            contact: "",
            address: "",
            
        }
    }
    componentWillMount(){
        var pathArray = window.location.pathname.split( '/' );
  if(pathArray[1]==="editrestaurant"){
      this.props.getRestaurant("viswa");
    this.setState({
        editpage:true
    })

  }
    }
    componentWillReceiveProps(props){
        if(this.state.editpage){
            var { restaurantInfo,restaurantName,address,area,city,contact,state,username} = props.restaurantDetails.response;
            this.setState({
                restaurantName:restaurantName,
                restaurantInfo:restaurantInfo,
                area:area,
                city:city,
                state:state,
                contact:contact,
                address:address,
                username:username                
            } ) 
        }
        console.log(props);

    }
    handleInput({ target }) {
        this.setState({
            [target.name]: target.value

        })

    }
    changePage() {
        this.setState({
            editpage: !this.state.editpage
        })
    }
    ModalToggle() {
        this.setState({
            modalStatus: !this.state.modalStatus
        })
    }
    handleSubmit() {
var { restaurantInfo,restaurantName,address,area,city,contact,state} = this.state;
var username="viswa"
   if(this.state.editpage){

    UserPage.updateRestaurant(restaurantName,
        restaurantInfo,
        area,
        city,
        state,
        contact,
        address,username).then((data)=>{
    if(data.update){
        
    }

        })
   }else{
    this.props.addRestaurant(restaurantName,
        restaurantInfo,
        area,
        city,
        state,
        contact,
        address,username);
       
   }
       
    }
    render() {
        var category = [
            {
                text: 'BreakFast',
                value: 'BreakFast',
                image: { avatar: true, src: breakfast },
            },
            {
                text: 'Lunch',
                value: 'Lunch',
                image: { avatar: true, src: lunch },
            },
            {
                text: 'Dinner',
                value: 'Dinner',
                image: { avatar: true, src: dinner },
            }


        ];
     
    
        return (
            <div className="viswaa">

                <Headers />
                <div className="row">
                    <UserHeader />

                    <div className="col-md-10 col-lg-10">
                        <div style={{ textAlign: "center", paddingTop: "30px" }}>
                            <p className="form_heading_admin">
                                <img src={icon} srcset="https://image.flaticon.com/icons/png/512/264/264085.png 4x" alt="Dinner" title="Dinner" width="64" height="64" />
                                <h2 style={{ paddingLeft: "20px" }}>
                                    Add Restaurant
                              </h2>
                            </p>
                        </div>
                        <Form className="addRes_form_div">
                            <Form.Group>
                                <Form.Input label="Restaurant Name" placeholder='Restaurant Name' name="restaurantName" width={6} required onChange={(e) => {
                                    this.handleInput(e)
                                }}  value={this.state.restaurantName}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.TextArea label='About Restaurant' placeholder='Tell us more about you...' width={5} name="restaurantInfo" onChange={(e) => {
                                    this.handleInput(e)
                                }} value={this.state.restaurantInfo} />
                            </Form.Group>
                            <Form.Group>
                                <div class="form-group padding_top ">
                                    <select name="state" className="form-control" onChange={this.handleInput.bind(this)}  value={this.state.state} >
                                        <option > Select State</option>
                                        {StateDetails.map((data) => (
                                            <option value={data.state}>{data.state}</option>
                                        ))}

                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <div class=" form-group padding_top ">

                                    <select name="city" style={{ padding: "4px" }} className="form-control" onChange={this.handleInput.bind(this)} value={this.state.city} >
                                        <option >Select City</option>
                                        {StateDetails.map((data) => {
                                            if (data.state === this.state.state) {
                                                return data.city.map((data) => (<option value={data}>{data}</option>))
                                            }

                                        })}
                                    </select>
                                </div>

                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="Area" placeholder='Area' width={6} required name="area" onChange={(e) => {
                                    this.handleInput(e)
                                }}  value={this.state.area}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="Contact" placeholder='Contact' width={6} required name="contact" onChange={(e) => {
                                    this.handleInput(e)
                                }}  value={this.state.contact}/>
                            </Form.Group>
                            <div className="open_file_div">
                                <label for="file" class="ui icon button">
                                    <i class="file icon"></i>
                                    Open Image</label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <Form.Group>
                                <Form.TextArea label="Address" placeholder=' Enter Address' width={6} required name="address" onChange={(e) => {
                                    this.handleInput(e)
                                }}  value={this.state.address}/>
                            </Form.Group>
                            <div className="button_div"><Button onClick={() => {
                                this.handleSubmit()
                            }} color='red'>{this.state.editpage ? 'Save Changes' : 'Submit'}   </Button>   </div>
                        </Form>



                    </div>

                </div>

            </div>
        )
    }
}
