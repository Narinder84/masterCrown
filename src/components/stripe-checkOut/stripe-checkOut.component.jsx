/** @format */

import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const stripePrice = price * 100;
	const publishKey = 'pk_test_eobukyVZAZFa1hTeAQ2rF8HR00evvntTXx';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: stripePrice,
				token,
			},
		})
			.then((response) => {
				alert('Payment Successfull');
			})
			.catch((error) => {
				console.log('error');
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Crown Cloth Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $ ${price}`}
			amount={stripePrice}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishKey}
		/>
	);
};

export default StripeCheckoutButton;
