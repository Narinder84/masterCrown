/** @format */

import React from 'react';

import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

// type Item = {
// 	id: number;
// 	name: string;
// 	imageUrl: string;
// 	price: number;
// };
// export type THeader = {
// 	id: number;
// 	title: string;
// 	routeName: string;
// 	items: Array<Item>;
// };

const CollectionPreview = ({ collectionItems }) => {
	const { title, items } = collectionItems;
	return (
		<>
			<div className='collection_preview_container'>
				<h2 className='title'>{title}</h2>
				<div className='collection_preview_items'>
					{items.map((item, indx) =>
						indx <= 4 ? <CollectionItem key={item.id} item={item} /> : null,
					)}
				</div>
			</div>
		</>
	);
};

export default CollectionPreview;
