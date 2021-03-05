import React from 'react';
import useForm from './userForm';
import OrderSummary from './OrderSummary';
import Showreservation from '../Showreservation';

function OrderReadyNow({total, shipping}) {
    function handleSubmit() {
        console.log("Form submitted.");
    }

    let totalAmount = (total + shipping).toFixed(2)
    
    const stateSchema = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        address: {value: "", error: ""},
        city: {value: "", error: ""},
        state: {value: "", error: ""},
        zip: {value: "", error: ""},
        email: {value: "", error: ""},
        phone: {value: "", error: ""}
    };

    const validationStateSchema = {
        firstName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid first name format."
            }
        },

        lastName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid last name format."
            }
        },

        address: {
            required: true,
            validator: {
                error: "Invalid address format."
            }
        },

        city: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        state: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        zip: {
            required: true,
            validator: {
                regEx: /^\d{5}$|^\d{5}-\d{4}$/,
                error: "Invalid zip format, use like 12345."
            }
        },

        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Invalid email format."
            }
        },

        phone: {
            required: true,
            validator: {
                regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
                error: "Invalid phone number format use like +2923432432432."
            }
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };
    return (
        <section className="checkout-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <h5>Su Reservación está lista este es Su ID: A-3123123</h5>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                            <h3 className="title">Billing Details</h3>

                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
										<label>Nombre de Reservación:</label>
										
                                        
                                    </div>
                                </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                        <label>Día de Admisión:</label>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                        <label>Día de Checkout:</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                        <label>Acompañantes Adultos:</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Acompañantes menores:</label>
                                           
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Email:</label>
                                        
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Número de Telefono:</label>
                                           
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Estatus:</label>
                                            
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Habitación:</label>
                                          
                                           
                                        </div>
                                    </div>

                                    

                                    <div className="col-lg-12 col-md-12">
                                    <h3 className="title">Enviar Formulario</h3>
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Order Notes" className="form-control"></textarea>
                                        </div>
                                        <br/>
                                        <button className="default-btn">Enviar nota</button>
                                  
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Showreservation disabled={disable} stateData={state} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default OrderReadyNow;