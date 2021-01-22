// async function GetJoke(setJoke, joke) {
// 	const jokePromise = fetch("https://icanhazdadjoke.com", {
// 		headers: {
// 			Accept: "application/json",
// 		},
// 	});

// 	const response = await jokePromise;

// 	const jokeData = await response.json();

// 	console.log(jokeData.joke);
// 	setJoke([...joke, jokeData]);
// }

// export default GetJoke;

const GetPokemon = async (pokemon, setPokemon) => {
	const url = "https://pokeapi.co/api/v2/pokemon-species/";

	const pokemonPromise = fetch(url, {
		method: "GET",
		headers: { Accept: "application/json" },
	});

	const response = await pokemonPromise;

	const pokemonData = await response.json();

	console.log(pokemonData);
	// setPokemon([...pokemon, pokemonData]);
};

export default GetPokemon;
