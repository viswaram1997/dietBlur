import React, { Component } from 'react'
import Header from "../../component/Header";
import card1 from "../../assets/image/PBH-Food-Rusty-Bucket-9-400x400.jpg";
import Footer from "../../component/Footer";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div >
                    <div className="row homepage_banner_div">
                        <div className=" homepage_banner ">
                        
                            <div class="form-group home_search">                                
                                <input type="text" class="form-control search_form" id="usr" placeholder="Search for restaurants" />                               
                            </div>
                         
                        </div>
                    </div>
                </div>
                <div className=" container homepage_content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card-top-content-div">
                                <h2>Collections</h2>
                                <p className="home_p_content" >Explore curated lists of top restaurants, cafes, pubs, and bars in and around Chennai, based on trends</p>
                            </div>
                            <div className="row card_row">
                                <div className="col-md-6 ">
                                    <div class="card trend_cards">
                                        <div class="card-block">
                                            <div className="row img_row">
                                                <div className="col-md-4 img" >

                                                </div>
                                                <div className="col-md-8">
                                                    <h5>Trending this Week</h5>
                                                    <p class="card-text home_card_text">With supporting text below as a natural </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card trend_cards">
                                        <div class="card-block">
                                            <div className="row img_row">
                                                <div className="col-md-4 img1">

                                                </div>
                                                <div className="col-md-8">
                                                    <h5>Trending this Week</h5>
                                                    <p class="card-text home_card_text">With supporting text below as a natural </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card All_collection_card">
                                        <div class="card-title collection_body">

                                            <p class="card-text collection_link">All Collections</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card trend_cards">
                                        <div class="card-block">
                                            <div className="row img_row">
                                                <div className="col-md-4 img2">

                                                </div>
                                                <div className="col-md-8">
                                                    <h5>Trending this Week</h5>
                                                    <p class="card-text home_card_text">With supporting text below as a natural </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card trend_cards">
                                        <div class="card-block">
                                            <div className="row img_row">
                                                <div className="col-md-4 img3">

                                                </div>
                                                <div className="col-md-8">
                                                    <h5>Trending this Week</h5>
                                                    <p class="card-text home_card_text">With supporting text below as a natural </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="Order-online-div">
                                <h2>Order Food Online</h2>
                                <p className="home_p_content" >From the best restaurants delivering to your doorstep</p>

                            </div>
                        </div>
                        <div className="row localtion_list_whole_div">
                        <div className="col-md-12">
                  
                        </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
