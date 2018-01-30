import React, { Component } from 'react';
import Headers from "./Header";
import { Link } from 'react-router-dom';

export default class UserHeader extends Component {
    render() {
        return (
       [  
        <div className=" row homepage_banner_div">
            <div className=" userpage_banner ">
            </div>
        </div>,
        <div className="col-lg-2 side_bar_col">

            <ul className="sidebar_ul">
                <li className="selectedrpagTab_usee"><Link to="/addrestaurant" className="underline_Remove" onClick={()=>{
                    this.props.changePage();
                }}> Add Restaurant </Link></li>
                <li> <Link to="/editrestaurant" className="underline_Remove" onClick={()=>{
                    this.props.changePage();
                }}>Edit Restaurant </Link></li>
                <li> <Link to="/addmenu" className="underline_Remove">Add Menu </Link></li>
                <li> <Link to="/addoffer" className="underline_Remove">Add Offers </Link></li>
             
            </ul>

        </div>
         ]

          
        )
    }
}
