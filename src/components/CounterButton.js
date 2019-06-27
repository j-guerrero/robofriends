import React, { PureComponent } from 'react';


// Wil only render when 'props' are changed
class CounterButton extends PureComponent {

	constructor(){
		super();
		this.state = {
			count: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		if (this.state.count !== nextState.count){
			return true
		}

		return false;
	}

	updateCount = () => {
		this.setState(state =>{
			return {count: state.count + 1}
		})
	}
	
	render(){
		return (
			<button id='counter' color={this.props.color} onClick={this.updateCount}>
				Count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;