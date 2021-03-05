import React, { Component } from 'react';
import Link from 'next/link';

class ProductDetailsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="tab products-details-tab">
                <ul className="tabs">
                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                        className="current"
                    >
                        <a href="#">
                            <div className="dot"></div> Description
                        </a>
                    </li>
                    
                    

                   

                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab4')}}
                    >
                        <a href="#">
                            <div className="dot"></div> Why Buy From Us
                        </a>
                    </li>

                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab5')}}
                    >
                        <a href="#">
                            <div className="dot"></div> Reviews
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="tab1" className="tabs-item">
                        <div className="products-details-tab-content">
                            <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <ul>
                                        <li>Capacidad de personas: 6</li>
                                        <li>Baños: </li>
                                        <li>Camas: </li>
                                        <li>Cuenta con Cocina</li>
                                    </ul>
                                </div>

                               
                            </div>
                        </div>
                    </div>

                    
                    
                    <div id="tab4" className="tabs-item">
                        <div className="products-details-tab-content">
                            <p>Descripción detallada:</p>

                            <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>

                        </div>
                    </div>

                    <div id="tab5" className="tabs-item">
                        <div className="products-details-tab-content">
                            <div className="products-review-form">
                                <h3>Customer Reviews</h3>

                                <div className="review-title">
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                    <p>Based on 3 reviews</p>

                                    <Link href="#">
                                        <a className="default-btn">Write a Review</a>
                                    </Link>
                                </div>

                                <div className="review-comments">
                                    <div className="review-item">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bx-star'></i>
                                        </div>
                                        <h3>Good</h3>
                                        <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>

                                    <div className="review-item">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bx-star'></i>
                                        </div>
                                        <h3>Good</h3>
                                        <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>

                                    <div className="review-item">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bx-star'></i>
                                        </div>
                                        <h3>Good</h3>
                                        <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                </div>

                                <div className="review-form">
                                    <h3>Write a Review</h3>

                                    <form onSubmit={e => e.preventDefault()}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="review-body" id="review-body" cols="30" rows="6" placeholder="Write your comments here" className="form-control"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">Submit Review</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailsTab;