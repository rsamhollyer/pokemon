import "./App.css";
import GetPokemon from "./Ajax/GetPokemon";
import PokemonButton from "./Components/PokemonButton";
import PokemonGallery from "./Components/PokemonGallery";
import { useState } from "react";

function App() {
	const [pokemon, setPokemon] = useState([]);

	return (
		<div className="App">
			<header>
				<h1>POKEMON!</h1>
				<PokemonButton click={GetPokemon(pokemon, setPokemon)} />
				<PokemonGallery />
			</header>
		</div>
	);
}

export default App;
