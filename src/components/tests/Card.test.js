import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card.js';
import {createSerializer} from 'enzyme-to-json';


expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

it('expect to render Card component', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
})