import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import CounterButton from '../CounterButton.js';
import {createSerializer} from 'enzyme-to-json';


expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

it('expect to render CounterButton component', () => {
	const mockColor = 'red'
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	const mockColor = 'red'
	const wrapper = shallow(<CounterButton color={mockColor} />);

	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 1});
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2});
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3});
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.state()).toEqual({ count: 3});
	expect(wrapper.props().color).toEqual('red');
})