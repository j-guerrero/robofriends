import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css';

class Modal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){
	return(
		<div className="modal">
			<article className="card br3">
			<div className='modal-close' onClick={this.props.toggleModal}>&times;</div>
				<div className="content">
					<div class=" black">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis malesuada est. Ut sed hendrerit felis. Vestibulum facilisis non arcu sed fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tempus magna tortor, ac convallis nibh auctor a.</p>

					</div>
					<div className="pa4 black">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis malesuada est. Ut sed hendrerit felis. Vestibulum facilisis non arcu sed fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tempus magna tortor, ac convallis nibh auctor a.</p>
					</div>
				</div>
			</article>
		</div> 
		)
	}
}

export default Modal;