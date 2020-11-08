/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth, createDataBaseForUser } from '../../firabase/fireBaseUtils';
import Button from '../../components/button/button.component';

import Input from '../../components/input/input';

import './register.scss';

const Register: React.FC = () => {
	let RegisterState = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};
	const [registerInfo, setRegisterInfo] = useState(RegisterState);

	const { email, password, displayName, confirmPassword } = registerInfo;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;

		setRegisterInfo({
			...registerInfo,
			[name]: value,
		});
	};

	const handleSubmit = async () => {
		if (
			password === confirmPassword &&
			password.length &&
			confirmPassword.length
		) {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password,
			);

			await createDataBaseForUser(user, { displayName });
		}
		setRegisterInfo({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		});
	};

	return (
		<div className='register_container '>
			<div className='register_form  '>
				<p>Please provide registering details here :</p>
				<Input
					label='Name:'
					name='displayName'
					value={displayName}
					placeholder='name'
					type='text'
					inputChange={handleChange}
				/>
				<Input
					label='Email:'
					name='email'
					value={email}
					placeholder='email'
					type='email'
					inputChange={handleChange}
				/>
				<Input
					label='Password:'
					name='password'
					value={password}
					placeholder='password'
					type='password'
					inputChange={handleChange}
				/>
				<Input
					label='Confirm Password:'
					name='confirmPassword'
					value={confirmPassword}
					placeholder='email'
					type='password'
					inputChange={handleChange}
				/>
				<div className='btn'>
					<Button btAction={handleSubmit}>Register</Button>
				</div>
				<h4>
					If registered click
					<Link to='/signIn'>
						<span> "signIn"</span>
					</Link>
				</h4>
			</div>
		</div>
	);
};

export default Register;
