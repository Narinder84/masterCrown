/** @format */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { isCollectionFetching } from '../../redux/collections/collections.reselect';
// import { fetchCollectionsFromFireStore } from '../../firabase/fireBaseUtils';
import {
	fetchCollectionsAsync,
	fetchCollectionsStarts,
} from '../../redux/collections/collections.actions';
import CollectionsOverView from '../../components/collectionOverView/collection-Overview.component';
import CollectionBySection from '../../components/collection-by-section/collection-by-section.component';
import Scroller from '../../components/scroller/scroller.component';
import Loading from '../../components/loading/loading.component';
import { getCollections } from '../../redux/collections/collections.reselect';
import './shopPage.style.scss';

const ShopPage = ({ match, fetchCollectionsAsync, collections }) => {
	useEffect(() => {
		fetchCollectionsAsync();
		// for using thunks ===>
		// const getFetchCollectionStarts = async () => {
		// 	const collections = await fetchCollectionsFromFireStore();

		// 	await updateCollections(collections);
		// };
		// getFetchCollectionStarts();
	}, [fetchCollectionsAsync]);

	return (
		<Switch>
			{collections.length ? (
				<Scroller>
					<Route exact path={`${match.path}`} component={CollectionsOverView} />
					<Route
						path={`${match.path}/:categoryId`}
						component={CollectionBySection}
					/>
				</Scroller>
			) : (
				<Loading />
			)}
		</Switch>
	);
};

const mapStateToProps = (state) => ({
	isCollectionFetching: () => isCollectionFetching(state),
	collections: getCollections(state),
});

const mapDispatchToProps = (dispatch) => ({
	// for thunks ==>
	// fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
	fetchCollectionsAsync: () => dispatch(fetchCollectionsStarts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
