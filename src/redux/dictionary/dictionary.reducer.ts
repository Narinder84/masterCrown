/** @format */

import { SectionType } from './dictionary.types';
import sections from './directory.data';

const INITIAL_STATE: SectionType = sections;

const dictionaryReducer = (state = INITIAL_STATE, action = {}): SectionType => {
	switch (action) {
		default:
			return state;
	}
};

export default dictionaryReducer;
