import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
            amount={100}
            name = "NeverSkip"
            description = "Pay a dollar per credit"
            token={token => {
                this.props.handleToken(token)}}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className = "btn">
                    Deposit Money
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments)