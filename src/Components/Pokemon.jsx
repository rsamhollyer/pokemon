import React from "react";

const Pokemon = ({ name }) => {
	console.log(name);
	return (
		<div className="container">
			<h3>{name}</h3>
		</div>
	);
};

export default Pokemon;
