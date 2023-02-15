import { pokemon } from './data.js';
//No lo podemos borrar
import data from './data/pokemon/pokemon.js'; 


console.log(pokemon, data);
document.getElementById("root").innerHTML = pokemon; 

//const jsonPokemon=JSON.parse(name);
//console.log(typeof jsonPokemon);