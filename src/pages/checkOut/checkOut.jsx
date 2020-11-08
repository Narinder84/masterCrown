/** @format */

import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/button.component';
import CheckOutItems from '../../components/checkOutItems/checkOutItems';
import Scroller from '../../components/scroller/scroller.component';
import { getShopItems, getGrandTotal } from '../../redux/cart/cart.reselector';
import { deleteAllItems } from '../../redux/cart/cart.actions';
import StripeCheckoutButton from '../../components/stripe-checkOut/stripe-checkOut.component';
import './checkOut.scss';

const CheckOut = ({ shopItems, grandTotal, deleteAll }) => {
	return (
		<div className='checkOut_container'>
			<p>List Of Items</p>
			<div className='checkOut_table'>
				<Scroller>
					<div className='checkOut_header'>
						<div className='header'>
							<span>Item Name</span>
						</div>
						<div className='header'>
							<span>Price</span>
						</div>
						<div className='header'>
							<span>Quantity</span>
						</div>
						<div className='header'>
							<span>Total</span>
						</div>
						<div className='header'>
							<span>Action</span>
						</div>
					</div>
					<div className='table_contents'>
						{shopItems.length ? (
							shopItems.map((item) => (
								<CheckOutItems key={item.id} item={item} />
							))
						) : (
							<span>Empty Cart !!</span>
						)}
					</div>
				</Scroller>
				<div className='checkOut_footer'>
					<div className='footer'>
						<span></span>
					</div>
					<div className='footer'>
						<span></span>
					</div>
					<div className='footer'>
						<span>GrandTotal</span>
					</div>
					<div className='footer'>
						<span>{grandTotal}</span>
					</div>
					<div className='footer'>
						<span></span>
					</div>
				</div>
			</div>
			<div className='check_bt'>
				<div className='pay'>
					<StripeCheckoutButton price={grandTotal} />
				</div>
				<Button btAction={deleteAll} fontSize={1}>
					Clear All
				</Button>
			</div>
			<div>
				<p className='warning'>
					Please use the following test credit card for payments---{'> '}
					4242-4242-4242-4242 ---Exp 01/21---cvv: 123
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	shopItems: getShopItems(state),
	grandTotal: getGrandTotal(state),
});

const mapDispatchYoProps = (dispatch) => ({
	deleteAll: () => dispatch(deleteAllItems()),
});

export default connect(mapStateToProps, mapDispatchYoProps)(CheckOut);
