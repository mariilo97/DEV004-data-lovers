import datos from "./data/pokemon/pokemon.js";
import { filtrarTarjetas, ordenarPokemon, mejoresPokemon } from "./data.js";
const arregloPokemon = datos.pokemon.slice(0,19);

const vistaPokemon = document.getElementById("vistaPokemon");

function mostrarTarjetas(arregloPokemon) {
  vistaPokemon.innerHTML= ''
  for (let i = 0; i < arregloPokemon.length; i++) {
    vistaPokemon.innerHTML += `<article>
    <h1>${arregloPokemon[i].name}</h1> 
    <h2>Type:</h2>        
    <h3>${arregloPokemon[i].type}<h3/>
    <img src="${arregloPokemon[i].img}" alt="">
    <h4>Stats</h4>
    <h5>
    <p>base-attack:  ${arregloPokemon[i].stats["base-attack"]}</p>
    <p> base-defense: ${arregloPokemon[i].stats["base-defense"]}</p> 
    <p>base-stamina: ${arregloPokemon[i].stats["base-stamina"]}</p>
    </h5>
    <h6>${arregloPokemon[i].num}</h6>
  </article>`;
  }
}

const seleccionTipo = document.getElementById("tipos");
seleccionTipo.addEventListener('change', function(){
  const tipoPokemon = seleccionTipo.value
  //console.log(seleccionTipo.value)
  const pokemonsFiltrados= filtrarTarjetas(arregloPokemon, tipoPokemon ); // invocamos para ver el resultado
  //console.log(pokemonsFiltrados)
  mostrarTarjetas(pokemonsFiltrados)

});

const seleccionOrdenar = document.getElementById("ordenarAlfabeticamente");
seleccionOrdenar.addEventListener('change', function(){
  const ordenPokemon = seleccionOrdenar.value
  console.log(ordenPokemon);

  //console.log(seleccionOrdenar)
  const pokemonsOrdenados= ordenarPokemon(arregloPokemon, ordenPokemon); // invocamos para ver el resultado
  //console.log(pokemonsOrdenados)


  mostrarTarjetas(pokemonsOrdenados)

});

const topPokemon = document.getElementById("top");
topPokemon.addEventListener('click', function(){
  const bestPokemon = topPokemon.value
  console.log(bestPokemon);

  //console.log(topPokemon)
  const pokemonsTop= mejoresPokemon(arregloPokemon);

  //mostrarTarjetas(pokemonsTop)

})



mostrarTarjetas(arregloPokemon);

/*const button = document.getElementById("btnValidate");
button.addEventListener("click", validate);*/