import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import MainPage from '../MainPage';


expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
		error: false
	}

	wrapper = shallow(<MainPage {...mockProps} />);
})

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly for \'John\'', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		isPending: false,
		error: false
	}
	const wrapper2 = shallow(<MainPage {...mockProps2}/>);
	expect(wrapper2.instance().filterRobots()).toEqual([{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}]);
})

it('filters robots correctly for \'John\' #2', () => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'a',
		isPending: false,
		error: false
	}
	const dummyFilterRobots = []
	const wrapper3 = shallow(<MainPage {...mockProps3}/>);
	expect(wrapper3.instance().filterRobots()).toEqual(dummyFilterRobots);
})

it('tests for loading', () =>{
	const mockProps4 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'a',
		isPending: true,
		error: false
	}
	const wrapper4 = shallow(<MainPage {...mockProps4}/>);
	expect(wrapper4.contains(<h1>Loading</h1>)).toEqual(true);
})