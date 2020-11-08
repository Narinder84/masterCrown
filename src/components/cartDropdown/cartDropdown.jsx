/** @format */

import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getShopItems } from '../../redux/cart/cart.reselector';

import CartDropDownItems from '../cartDropDownItems/cartDropDownItems';
import Scroller from '../scroller/scroller.component';
import './cartDropdown.scss';

const CartDropDown = ({ shopItems }) => {
	return (
		<div className='cart_dropdown'>
			<Scroller>
				<div className='cart_items'>
					{shopItems.map((item) => (
						<CartDropDownItems key={item.id} item={item} />
					))}
				</div>
			</Scroller>
			<div className='cart_bottom'>
				<Link to='/checkOut'>
					<h5>CHECK OUT</h5>
				</Link>
			</div>{' '}
		</div>
	);
};

const mapSateToProps = (state) => ({
	shopItems: getShopItems(state),
});

export default connect(mapSateToProps)(CartDropDown);
