import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../CardList.js';
import {createSerializer} from 'enzyme-to-json';


expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

it('expect to render CardList component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'Jon Snow',
			username: 'JonJon',
			email: 'jon@gmail.com'
		}
	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})