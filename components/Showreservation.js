import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';

class Showreservation extends Component {
    handleEmptyForm = () => {
        toast.error('Please fillup the form carefully', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {
        let totalAmount = (this.props.total + this.props.shipping).toFixed(2)
        let { disabled } = this.props;
        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Your Order</h3>

                    <div className="product-info">
                        <div className="single-categories-box">
                                <img src={require("../images/categories/categories2.jpg")} alt="image" />

                                <div className="content">
                                    <span>Su Reservación está lista</span>
                                    <h3>Seguir buscando</h3>
                                    
                                    <Link href="/hospedaje">
                                        <a className="default-btn">Ver Hospedaje</a>
                                    </Link>
                                </div>
                                
                                
                            </div>
                            <h4>Su Habitación es: Bungalow para 2 personas</h4>
                    </div>

                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
        shipping: state.shipping
    }
}

export default connect(
    mapStateToProps
)(Showreservation)