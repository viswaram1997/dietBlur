import React, { Component } from 'react'
import Headers from "../../component/Header";
import { Form, Input, TextArea, Button, Dropdown, Card, Icon, Header, Sticky, Tab, Modal,Image } from 'semantic-ui-react';

import breakfast from "../../assets/image/brea.jpg";
import lunch from "../../assets/image/lunch.jpg";
import dinner from "../../assets/image/dinner.jpg";
import Label from 'semantic-ui-react/dist/commonjs/elements/Label/Label';
import AddCombo from "../../component/addcombo";
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import UserHeader from "../../component/userpageHeader";
export default class AddOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editpage: false,
            modalStatus: false
        }
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
                                                  <div className="row" style={{paddingTop:"80px"}}>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                <Card.Group>
                            <Card>
                                <Card.Content>
                                    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                                    <Card.Header>
                                        Steve Sanders
                                   </Card.Header>
                                    <Card.Meta>
                                        Friends of Elliot
                                   </Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green'>Edit</Button>
                                        <Button basic color='red'>Delete</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                            </div>
                            <div className="col-lg-3 col-md-3">

                                <Card.Group>
                            <Card>
                                <Card.Content>
                                    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                                    <Card.Header>
                                        Steve Sanders
                                   </Card.Header>
                                    <Card.Meta>
                                        Friends of Elliot
                                   </Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green'>Approve</Button>
                                        <Button basic color='red'>Decline</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                            </div>
                            <div className="col-lg-3 col-md-3">

                                <Card.Group>
                            <Card>
                                <Card.Content>
                                    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                                    <Card.Header>
                                        Steve Sanders
                                   </Card.Header>
                                    <Card.Meta>
                                        Friends of Elliot
                                   </Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green'>Approve</Button>
                                        <Button basic color='red'>Decline</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                            </div>
                            <div className="col-lg-3 col-md-3">

                                <Card.Group>
                            <Card>
                                <Card.Content>
                                    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                                    <Card.Header>
                                        Steve Sanders
                                   </Card.Header>
                                    <Card.Meta>
                                        Friends of Elliot
                                   </Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green'>Approve</Button>
                                        <Button basic color='red'>Decline</Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                            </div>
                    
                     </div>

                            
                        </div>
                           
                        <div className="add_offers cursor_pointer">
                            <h2  style={{paddingRight:"50px",paddingTop:"137%"}}onClick={this.ModalToggle.bind(this)}><Icon name="add" /> Add Offers</h2>
                                       <Modal open={this.state.modalStatus} size="large" >
                            <Modal.Header>Add Offers</Modal.Header>
                            <Modal.Content scrolling className="modal_content">
                                <AddCombo close={this.ModalToggle.bind(this)} />
                            </Modal.Content>

                        </Modal>

 

                    </div>
                </div>

            </div>
        )
    }
}
