/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firabase/fireBaseUtils.js';
import { getUserSinghOut } from '../../redux/user/user.action';
import { deleteAllItems } from '../../redux/cart/cart.actions';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import ShopingBag from '../../components/shoping-bag/shoping-bag.component';

import './header.styles.scss';

const Header = ({ currentUser, getUserSinghOut, deleteAllItems }) => {
	const handleSignOut = () => {
		// auth.signOut().then(() => this.setState({ currentUser: '' }));
		auth.signOut().then(() => {
			getUserSinghOut();
			deleteAllItems();
		});
	};
	return (
		<>
			<div className='header-container'>
				<div className='header-left'>
					<Link to='/'>
						<Logo />
					</Link>
				</div>
				<div className='header-right'>
					<Link to='/shop'>Shop</Link>
					{currentUser ? (
						<span onClick={() => handleSignOut()}>Sign Out</span>
					) : (
						<Link to='/signIn'>Sign In</Link>
					)}

					<Link to='/checkOut'>Check Out</Link>
					<ShopingBag />
				</div>
			</div>
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getUserSinghOut: () => dispatch(getUserSinghOut()),
	deleteAllItems: () => dispatch(deleteAllItems()),
});

export default connect(null, mapDispatchToProps)(Header);
