/** @format */

import React from 'react';
import { connect } from 'react-redux';
import {
	addItemToCart,
	reduceItemFromCart,
	deleteItemFromCart,
} from '../../redux/cart/cart.actions';

import './checkOutItems.scss';

const CheckOutItems = ({ item, reduceItem, addItem, deleteItem }) => {
	return (
		<div className='check_out_items'>
			<div className='check_Out_header'>
				<img alt='' className='check_Out_image' src={item.imageUrl} />
				<span>{item.name}</span>
			</div>
			<div className='header'>
				<span>{item.price}</span>
			</div>
			<div className='header'>
				<span>
					<span className='br' onClick={() => reduceItem(item)}>
						<i className='fas fa-less-than'></i>
					</span>
					{item.quantity}{' '}
					<span onClick={() => addItem(item)}>
						<i className='fas fa-greater-than'></i>
					</span>
				</span>
			</div>
			<div className='header'>
				<span>{item.price * item.quantity}</span>
			</div>
			<div className='header'>
				<span onClick={() => deleteItem(item)}>
					<i className='far fa-trash-alt'></i>
				</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	reduceItem: (item) => dispatch(reduceItemFromCart(item)),
	addItem: (item) => dispatch(addItemToCart(item)),
	deleteItem: (item) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItems);
