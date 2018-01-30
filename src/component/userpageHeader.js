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
                <li className="selectedrpagTab_usee"><Link to="/addrestaurant" className="underline_Remove"> Add Restaurant </Link></li>
                <li> <Link to="/" className="underline_Remove">Edit Restaurant </Link></li>
                <li> <Link to="/" className="underline_Remove">Add Menu </Link></li>
                <li> <Link to="/" className="underline_Remove">Add Offers </Link></li>
                <li> <Link to="/" className="underline_Remove">dsdsdssd </Link></li>
            </ul>

        </div>
         ]

          
        )
    }
}
