/** @format */

import React from 'react';

import './shoping-bag.style.scss';

import { toggleCart } from '../../redux/cart/cart.actions';
import { ReactComponent as Cart } from '../../assets/shopping-bag (1).svg';
import CartDropDown from '../cartDropdown/cartDropdown';
import { isHidden, getItemsCount } from '../../redux/cart/cart.reselector';
import { connect } from 'react-redux';

const ShopingBag = ({ toggleCart, isHidden, itemCount }) => {
	return (
		<>
			<div className='shoping_bag' onClick={toggleCart}>
				<Cart className='shop-icon' />
				<p>{itemCount}</p>
				{isHidden ? <CartDropDown /> : null}
			</div>
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = (state) => ({
	isHidden: isHidden(state),
	itemCount: getItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopingBag);
