/** @format */

import React from 'react';
import { connect } from 'react-redux';

import DirectoryItem from '../../components/directory/directory-item.componet';

import './HomePage.style.scss';

// interface HomePageProps {
// 	id?: number;
// }
// interface HomePageState {}

// type Props = HomePageProps & HomePageState & LinkStateProps;

// export const Directory: React.FC<Props> = (props) => {
export const HomePage = (props) => {
	return (
		<>
			<div className='collection-container'>
				{props.sections.map((section) => (
					<DirectoryItem key={section.id} collection={section} />
				))}
			</div>
		</>
	);
};

// interface LinkStateProps {
// 	sections: SectionDetailType[];
// }

// const mapStateToProps = (
// 	state: AppState,
// 	ownProps: HomePageProps,
// ): LinkStateProps => ({
// 	sections: state.sections,
// });

const mapStateToProps = (state, ownProps) => ({
	sections: state.sections,
});

export default connect(mapStateToProps, null)(HomePage);
