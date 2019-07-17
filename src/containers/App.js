import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions.js';

import MainPage from '../components/MainPage';
import Modal from '../components/Modal/Modal.js';

import './App.css';


const mapStateToProps = (state) =>{
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
		isModalOpen: state.toggleModal.isModalOpen
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	render(){
		return <MainPage { ...this.props }/>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);