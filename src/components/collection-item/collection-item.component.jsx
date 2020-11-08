/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';

import './collection-item.style.scss';

const CollectionItem = (props) => {
	const { item, addItemToCart } = props;
	const { name, imageUrl, price } = item;

	const handleBtn = () => {
		addItemToCart(item);
	};
	return (
		<>
			<div className='item_container'>
				<div
					className='image'
					style={{ backgroundImage: `url(${imageUrl})` }}></div>
				<div className='item_details'>
					<span>{name}</span>
					<span>${price}</span>
				</div>
				<div className='btn'>
					<Button btAction={handleBtn} fontSize={1}>
						ADD TO CART
					</Button>
				</div>
			</div>
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
