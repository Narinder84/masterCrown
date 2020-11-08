/** @format */

import React from 'react';

import './button.style.scss';

// type TProps = {
// 	size?: number;
// 	children?: string;
// 	btAction?: () => void;
// };
const Button = (props) => {
	const value = props.fontSize + 'em';

	return (
		<button
			onClick={props.btAction}
			className={`button ${
				props.isGoogle === 'isGoogle' ? ' google' : 'normal'
			}`}
			style={{ fontSize: `${value}` }}>
			{props.children}
		</button>
	);
};

export default Button;
