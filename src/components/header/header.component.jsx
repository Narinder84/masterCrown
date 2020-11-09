/** @format */

import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firabase/fireBaseUtils.js';
import { getUserSinghOut } from '../../redux/user/user.action';
import { deleteAllItems } from '../../redux/cart/cart.actions';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import ShopingBag from '../../components/shoping-bag/shoping-bag.component';

import {
	HeaderContainer,
	LeftContainer,
	LinkContainer,
	RightContainer,
	SpanTag,
} from './header.style';
// import './header.styles.scss';

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
			<HeaderContainer>
				<LeftContainer>
					<LinkContainer to='/'>
						<Logo />
					</LinkContainer>
				</LeftContainer>
				<RightContainer>
					<LinkContainer to='/shop'>Shop</LinkContainer>
					{currentUser ? (
						<SpanTag onClick={() => handleSignOut()}>Sign Out</SpanTag>
					) : (
						<LinkContainer to='/signIn'>Sign In</LinkContainer>
					)}

					<LinkContainer to='/checkOut'>Check Out</LinkContainer>
					<ShopingBag />
				</RightContainer>
			</HeaderContainer>
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getUserSinghOut: () => dispatch(getUserSinghOut()),
	deleteAllItems: () => dispatch(deleteAllItems()),
});

export default connect(null, mapDispatchToProps)(Header);
