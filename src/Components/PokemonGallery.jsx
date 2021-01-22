import React from "react";
import Pokemon from "./Pokemon";

const PokemonGallery = ({ data }) => {
	return (
		<div className="gallery">
			<h2>Here are your Pokemon!</h2>

			{data.map((d) => {
				return (
					<div className="card">
						<Pokemon name={d.name} />
					</div>
				);
			})}
		</div>
	);
};

export default PokemonGallery;
