/** @format */

import React from 'react';

import './input.scss';

const Input = ({ label, inputChange, ...props }) => {
	return (
		<>
			<div className='input_fields'>
				<label>{label}</label>
				<input onChange={(event) => inputChange(event)} {...props} />
			</div>
		</>
	);
};

export default Input;
