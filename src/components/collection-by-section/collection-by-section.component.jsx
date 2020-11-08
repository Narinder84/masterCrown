/** @format */

import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../collection-item/collection-item.component';
import { collectionsById } from '../../redux/collections/collections.reselect';
import './collection-by-section.style.scss';

const CollectionBySection = (props) => {
	const { collectionsById } = props;

	return (
		<div className='bySection'>
			<h2>{collectionsById.title}</h2>
			<div className='collection_by_section_container'>
				{collectionsById.items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collectionsById: collectionsById(ownProps)(state),
});

export default connect(mapStateToProps, null)(CollectionBySection);
