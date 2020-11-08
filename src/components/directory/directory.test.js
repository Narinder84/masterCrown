/** @format */
import React from 'react';
import { shallow } from 'enzyme';
import DirectoryItem from './directory-item.componet';

it('it will see', () => {
	expect(shallow(<DirectoryItem />)).toMatchSnapshot();
});
