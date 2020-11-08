/** @format */

import React from 'react';
import { connect } from 'react-redux';

import './collection-Overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview';
import { getCollections } from '../../redux/collections/collections.reselect';
// import { RootState } from '../../redux/redux-Global-type';
// import { selectCollections } from '../../redux/collections/collection.reselectors';

// type Props = ReturnType<typeof mapStateToProps> & {
// 	label?: string;
// };

const CollectionOverview = (props) => {
	const { collections } = props;

	return (
		<>
			<div className='collectionOverview_container'>
				{collections.map((collectionItems, indx) => (
					<CollectionPreview key={indx} collectionItems={collectionItems} />
				))}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	collections: getCollections(state),
});

export default connect(mapStateToProps, null)(CollectionOverview);
