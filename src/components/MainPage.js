import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry.js';
import Header from '../components/Header.js';

import './MainPage.css';

class MainPage extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		return this.props.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})
	}


	render(){
		const { onSearchChange, isPending } = this.props;
		
		return (
			<div className ='tc'>
				<Header />
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				{ isPending ? <h1>Loading</h1> :
					<ErrorBoundry>
							<CardList robots={this.filterRobots()}/>
						</ErrorBoundry>
				}
				</Scroll>
			</div>
			);
		}

}

export default MainPage