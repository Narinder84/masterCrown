/** @format */

import React from 'react';

import './cartDropDownItems.scss';

const CartDropDownItems = ({ item }) => {
	return (
		<div className='drop_down_items'>
			<img alt='' className='image' src={item.imageUrl} />
			<div>
				<span id='sp_cartDropdown'>{item.name} </span>
				<span id='sp_cartDropdown'>Qt </span>
				<span id='sp_cartDropdown_item'>{item.quantity}</span>
			</div>
		</div>
	);
};

export default CartDropDownItems;
