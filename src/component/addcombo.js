import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Icon } from 'semantic-ui-react';
import PropTypes from "prop-types";
import Label from 'semantic-ui-react/dist/commonjs/elements/Label/Label';

export default class AddCombo extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data: [{
                name: "",
                key: 1
            }],
            index:2,
            offername:"",
            offerdescription:""

        }


    }
    getInputValue(e, key) {
        let temp = this.state.data;
        temp.map((data) => {
            if (data.key === key) {

                data.name = e.target.value;
                data.key = key;
            }
        })
        this.setState({
            data: temp
        })
    }
    addDishName() {
        var index =this.state.index;
        let pushData = {
            name: "",
            key: index
        }

        let temp = this.state.data;
        temp.push(pushData);
        this.setState({
            data: temp,
            index:this.state.index+1
        })

    }
    deleteInput(key){
        let temp = this.state.data;
       var final=temp.splice(key,1);
       console.log(final,temp)
        this.setState({
            data:temp
        })


    }
    getInput({target}){
      this.setState({
        [target.name]:target.value
      })

    }
    handleSubmit(){
        this.props.close();
        
    }
    render() {
        return (
            <Form>
                <Form.Group >
                    <Form.Field control={Input} label='Offer Name' placeholder='Offer Name' name="offername" onChange={this.getInput.bind(this)} width={6} />
                </Form.Group>
                <Form.Field >

                <label>Dish Name</label>
                </Form.Field>
                {this.state.data.map((data, key) => {
                    return (
           
                            <Form.Group>

                                <Form.Field control={Input} placeholder='Dish Name' width={4} value={data.name} onChange={(e) => {
        
                                    this.getInputValue(e, data.key)
                                }} /> {key!==0?<Icon name="delete"  className="del_Icon"onClick={()=>{
                                  

                                        this.deleteInput(key)
                        
                                }}/>:null}
                            </Form.Group>
                    )
                })}


                <Icon name="add" className="cursor_pointer" style={{color:"#999999",paddingBottom:"30px"}} onClick={() => {
                    this.addDishName()
                }} />
                <Form.Field control={TextArea} label='Offer Description' name="offerdescription" onChange={this.getInput.bind(this)} placeholder='Tell us more about you offer...' />
                <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
              <Form.Group style={{paddingTop:"40px"}}>

                <Form.Field control={Button} onClick={()=>{
                    this.handleSubmit()
                }} className="Modal_button">Submit</Form.Field>
                <Form.Field control={Button} onClick={()=>{
                    this.props.close()
                }} className="Modal_button">Cancel</Form.Field>
              </Form.Group>
            </Form>
        )
    }
}

