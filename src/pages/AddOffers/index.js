import React, { Component } from 'react'
import Headers from "../../component/Header";
import { Form, Input, TextArea, Button, Dropdown, Card, Icon, Header, Sticky, Tab, Modal, Image } from 'semantic-ui-react';
import breakfast from "../../assets/image/brea.jpg";
import lunch from "../../assets/image/lunch.jpg";
import dinner from "../../assets/image/dinner.jpg";
import Label from 'semantic-ui-react/dist/commonjs/elements/Label/Label';
import AddCombo from "../../component/addcombo";
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import { Link } from 'react-router-dom';
import UserHeader from "../../component/userpageHeader";
export default class AddMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editpage: false,
            modalStatus: false
        }
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
                    <UserHeader/>
                    <div className="col-md-10 col-lg-10">

                        <Header as='h2' icon className="icon_div_top">
                            <Icon name='food' color="red" />
                            Aasife

                        </Header>
                        <Form className="add_menu_form">
                            <p className="label_div">Category</p>
                            <Form.Group>

                                <Dropdown placeholder='Select Category' fluid selection options={category} />
                            </Form.Group>
                            <Form.Group>
                                <div className="open_file_div">
                                    <label for="file" class="ui icon button">
                                        <i class="file icon"></i>
                                        Open Image</label>
                                    <input type="file" id="file" style={{ display: "none" }} multiple />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="From" placeholder='Starting hr' width={3} required />
                                <Form.Input className="to_add_menu" label="To" placeholder='Ending hr' width={3} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="Special Items" placeholder="Enter Dish" width={5} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input label="Promo Code" placeholder="Enter Promo Code if any" width={5} />
                            </Form.Group>
                            <Form.Group>
                                <div className="cost_div" >
                                    <p className="label_div">Average Cost Per Person</p>
                                    <Input label="Average Cost" labelPosition='right' label={{ basic: true, content: 'Rs' }} placeholder="Average Cost Per Person" width={5} />
                                </div>
                            </Form.Group>
                            <div className="button_div"><Button color='red'>Save </Button>   </div>
                        </Form>


                    </div>


                </div>

            </div>
        )
    }
}
