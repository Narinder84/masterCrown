/** @format */

import React from 'react';
import { connect } from 'react-redux';

import DirectoryItem from '../../components/directory/directory-item.componet';
import { HomePageContainer } from './homePage.style';
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
			<HomePageContainer>
				{props.sections.map((section) => (
					<DirectoryItem key={section.id} collection={section} />
				))}
			</HomePageContainer>
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
