/** @format */

import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { checkUser } from './redux/user/user.action';
import {
	auth,
	createDataBaseForUser,
	createDataBase,
} from './firabase/fireBaseUtils';
import Header from './components/header/header.component';
import HomePage from './pages/home/HomePage.page';
import ShopPage from './pages/shopPage/shopPage';
import SignIn from './pages/signIn/signIn';
import './App.css';
import Register from './pages/register/register';
import CheckOut from './pages/checkOut/checkOut';
import { AppState } from './redux/root.reducer';
import { IUser } from './types/user/user';
import { AppActions } from './types/user/action';

// import SHOP_DATA from '../src/redux/collections/shop.data.js';

interface HomePageProps {
	id?: string;
	color?: string;
}

interface HomePageState {}
type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

const App: React.FC<Props> = ({ currentUser, checkUsers }) => {
	useEffect(() => {
		// createDataBase(SHOP_DATA);

		checkUsers();
	}, []);

	return (
		<>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route
					path='/signIn'
					render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)}
				/>
				<Route
					path='/register'
					render={() => (currentUser ? <Redirect to='/' /> : <Register />)}
				/>
				<Route path='/checkOut' component={CheckOut} />
			</Switch>
		</>
	);
};

interface LinkStateProps {
	currentUser: IUser | null | string;
}

interface LinkDispatchProps {
	checkUsers: () => void;
}

const mapStateToProps = (
	state: AppState,
	ownProps: HomePageProps,
): LinkStateProps => ({
	currentUser: state.user.currentUser,
});
const mapDispatchToProps = (
	dispatch: Dispatch<AppActions>,
	ownProps: HomePageProps,
): LinkDispatchProps => ({
	checkUsers: () => dispatch(checkUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
