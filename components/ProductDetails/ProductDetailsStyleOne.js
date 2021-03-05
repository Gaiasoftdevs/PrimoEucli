import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart, addQuantityWithNumber } from '../../store/actions/cartActions';
import ProductDetailsTab from './ProductDetailsTab';
import RelatedProducts from './RelatedProducts';
import ProductImage from './ProductImage';

const hookClass = (props) => {
    const router = useRouter();
    return <ProductDetailsStyleOne {...props} router={router} />
}

class ProductDetailsStyleOne extends Component {
    state = {
        qty: 1,
        max: 10,
        min: 1
    };

    handleAddToCart = () => {
        let { id } = this.props.router.query;
        let { qty } = this.state;
        this.props.addQuantityWithNumber(id, qty);  

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    incrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    decreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    render() {
        // let { id } = this.props.router.query;
        let { title, offer, oldPrice, newPrice, imageUrl } = this.props.product;
        // console.log()
        // let data = products.filter((product) => product.id == id);
        return (
            <section className="product-details-area pt-100 pb-70">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <ProductImage imageUrl={imageUrl} />
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>{title}</h3>

                                <div className="price">
                                {
                                    offer ? (
                                        <React.Fragment>
                                            <span className="old-price">${oldPrice}</span>
                                            <span className="new-price">${newPrice}</span>
                                        </React.Fragment>
                                    ) : (
                                        <span className="new-price">${oldPrice}</span>
                                    )
                                }
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="rating-count">3 reviews</a>
                                    </Link>
                                </div>

                                <ul className="products-info">
                                    
                                    <li>
                                        <span>Disponibilidad:</span> 
                                        3 libres
                                    </li>
                                    <li>
                                        <span>Tipo:</span> 
                                        Bungalow
                                    </li>
                                    <li>
                                        <span>Capacidad de Personas:</span> 
                                       5
                                    </li>
                                </ul>
                                <br/>


                                <div className="products-add-to-cart">
                                     <div className="input-counter">
                                        <input 
                                            type="date" 
                                           
                                        />
                                    </div>
                                        <div className="input-counter">
                                        

                                        <input 
                                            type="date" 
                                           
                                        />
                                 </div>
                                </div>
                                <br/>
                                <ul className="products-info">
                                    <li><span>Días de Estancia: 5</span></li>
                                    
                                    <li><span>subtotal:</span> 1000</li>
                                </ul>
                                
                                <div className="products-add-to-cart">
                                    
                                    <Link href="/checkout">
                                    <button 
                                        className="default-btn"
                                        onClick={console.log("Checkout")}
                                    >
                                        <i className="fas fa-cart-plus"></i> 
                                        Reservar Ahora
                                    </button>
                                    </Link>
                                </div>

                                
                           
                            </div>
                        </div>
                    </div>

                    {/* Product Details Tab */}
                    <ProductDetailsTab />
                </div>

                {/* Related Products */}
            </section>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))},
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(hookClass);