import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header  extends Component {
  render() {
    return (
        <nav class="navbar navbar-toggleable-md navbar-div bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Diet Blur</a>

  <div class="collapse navbar-collapse nav_content" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-md-0">
      <li class="nav-item active">
        <p class="nav-link">Home </p>
      </li>
      <li class="nav-item">
        <p class="nav-link">Link</p>
      </li>
      <li class="nav-item">
        <p class="nav-link"> <Link to="addrestaurant">Manage </Link></p>
      </li>
      <li class="nav-item">
      <Link to="/login" class="btn  SecondaryButton">Login</Link>
      </li>
        </ul>
        
   
  </div>
</nav>  )
  }
}
