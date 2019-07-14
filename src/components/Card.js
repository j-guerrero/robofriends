import React from 'react';

const Card = ({ name, email, id }) =>{

	return (
		<div className = 'tc bg-washed-green dib br3 pa1 ma2 grow'>
			<img alt='roboPic' src = {`https://robohash.org/${id}?set=set5&size=200x200`} />
			<div className="black">
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card;