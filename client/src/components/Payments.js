import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Payments extends React.Component {
    render(){
        return (
            <StripeCheckout
            name="Mail Out"
            description="Add 5 survey credits: $5" 
            amount={500}
            token={token => this.props.handleStripeToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);