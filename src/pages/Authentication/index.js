import React, { Component } from 'react';
import Header from "../../component/Header"
import food from "../../assets/image/food.jpg";
import UserService from "../../service/login";


export default class AuthenticationPage extends Component {
  constructor() {

    super();
    this.state = {
      currentComponent: 'signin',
      email: "",
      name: '',
      username: "",
      password: "",
      matchpassword: '',
      mobile: "",
      location: ""


    }
    this.getInputData = this.getInputData.bind(this);
    this.SignupUser = this.SignupUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  changeCurrentComponent(componentName) {
    this.setState({
      currentComponent: componentName
    })
  }
  loginUser(e) {
    e.preventDefault();
    UserService.LoginUser(this.state.username, this.state.password).then((res)=>{
      if (res.Userexist === true) {
      this.props.history.push('/home');
      }
      else{
        alert("invalid Data");
      }
    })

  
  }
  getInputData(e) {
    this.setState({
      [e.target.name]: e.target.value
    })


  }
  SignupUser(e) {
    e.preventDefault();

    var { email, password, username, matchpassword, mobile, location } = this.state;

    this.props.SignupUser(email, password, username, password, mobile, location);

  }

  render() {
    

    return (
      <div className="container-fluid login_div row" >
        {this.state.currentComponent === 'signin' ?
          <div className="Login_card">
            <div class="card-block card">
              <div className="row login_tab">
                <ul className=" col-md-12 login-whole-tab" >
                  <li onClick={() => { this.changeCurrentComponent('signip') }}>Login</li>
                  <li onClick={() => { this.changeCurrentComponent('signup') }}>SignUp</li>
                </ul>
              </div>
              <div className="row login-whole-form">
                <form className="col-md-12" >
                  <div class="form-group login_form_group">
                    <input type="text" class="form-control" name="username" placeholder="Email" value={this.state.username} onChange={this.getInputData.bind(this)



                    } />
                  </div>
                  <div class="form-group login_form_group">
                    <input type="password" class="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.getInputData.bind(this)} />
                  </div>
                  <div className="button-div">
                    <button className="btn PrimaryButton" style={{ margin: '5px' }} onClick={(e) => { this.loginUser(e) }}>Login</button>
                    <button className="btn SecondaryButton" >Cancel</button>
                  </div>
                </form>
              </div>
            </div>

          </div>

          : <div className="signup_card">

            <div class="card-block signup_card_div card">
              <div className="row login_tab">
                <ul className=" col-md-12 login-whole-tab" >
                  <li onClick={() => { this.changeCurrentComponent('signin') }}>Login</li>
                  <li onClick={() => { this.changeCurrentComponent('signup') }}>SignUp</li>
                </ul>
              </div>
              <div className="row login-whole-form">
                <form className="col-md-12">
                  <div class="form-group signup_form_group">
                    <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.getInputData} />
                  </div>
                  <div class="form-group signup_form_group">
                    <input type="text" class="form-control" name="username" placeholder="user name" onChange={this.getInputData} />
                  </div>
                  <div class="form-group signup_form_group">
                    <input type="text" class="form-control" name="name" placeholder="Name" onChange={this.getInputData} />
                  </div>
                  <div class="form-group signup_form_group">
                    <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.getInputData} />
                  </div>
                  <div class="form-group signup_form_group">
                    <input type="password" class="form-control" name="matchpassword" placeholder="Password" onChange={this.getInputData} />
                  </div>
                  <div class="form-group signup_form_group">
                    <input type="text" class="form-control" name="mobile" placeholder="Mobile" onChange={this.getInputData} />
                  </div>
                  <div class="form-group signup_form_group">
                    <input type="text" class="form-control" name="location" placeholder="Location" onChange={this.getInputData} />
                  </div>
                  <div className="button-div">
                    <button className="btn PrimaryButton" style={{ margin: '5px' }} onClick={this.SignupUser}>Login</button>
                    <button className="btn SecondaryButton" >Cancel</button>
                  </div>
                </form>
              </div>
            </div>

          </div>}
        
      </div>



    )
  }
}
