/** @format */

import React from 'react';
import { withRouter } from 'react-router';

import './directory-item.style.scss';

const DirectoryItem = (props) => {
	const { collection, history, match } = props;
	const { title, imageUrl, linkUrl, size } = collection;

	const handleClick = () => {
		history.push(`${match.url}${linkUrl}`);
	};

	return (
		<div
			className={`collection ${size ? 'large' : null} `}
			onClick={handleClick}>
			<div
				className='collection-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>

			<div className='collection-inner'>
				<h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
				<p>SHOP NOW</p>
			</div>
		</div>
	);
};

export default withRouter(DirectoryItem);
