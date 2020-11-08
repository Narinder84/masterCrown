/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/button/button.component';
import { googleSignInStart } from '../../redux/user/user.action';
import Input from '../../components/input/input';
import { auth } from '../../firabase/fireBaseUtils.js';
import { checkUser } from '../../redux/user/user.action';
import './signIn.scss';

const SignUp = ({ googleSignIn, checkUser }) => {
	const [signUpData, setSignUpData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setSignUpData({ ...signUpData, [name]: value });
	};

	const handleSignIn = async (event) => {
		event.preventDefault();
		const { email, password } = signUpData;

		if (email.length && password.length) {
			await auth.signInWithEmailAndPassword(email, password);
			checkUser();
		}
		setSignUpData({
			email: '',
			password: '',
		});
	};

	return (
		<div className='signUp_container'>
			<div className='signUp_form'>
				<p>
					<span id='signIn'>SignIn</span> with details :
				</p>
				<Input
					label='Email:'
					name='email'
					value={signUpData.email}
					placeholder='email'
					type='text'
					inputChange={handleChange}
				/>
				<Input
					label='Password:'
					name='password'
					value={signUpData.password}
					placeholder='password'
					type='password'
					inputChange={handleChange}
				/>
				<div className='btn'>
					<Button btAction={handleSignIn}>Sign In</Button>
				</div>
				<div className='btn'>
					<Button btAction={googleSignIn} isGoogle='isGoogle'>
						Sign In With Google
					</Button>
				</div>
				<h4>
					If not registered click
					<Link to='/register'>
						<span> "Register"</span>
					</Link>
				</h4>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignIn: () => dispatch(googleSignInStart()),
	checkUser: () => dispatch(checkUser()),
});

export default connect(null, mapDispatchToProps)(SignUp);
