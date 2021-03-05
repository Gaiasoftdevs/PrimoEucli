import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import OrderReadyNow from '../components/Checkout/OrderReadyNow';

class OrderReady extends Component {
    render() {
        return (
            <React.Fragment>
                <TopHeader/>
                <Navbar />
                <PageBanner 
                    pageTitle="Reservación" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Reservación lista" 
                /> 
                <OrderReadyNow /> 
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default OrderReady;