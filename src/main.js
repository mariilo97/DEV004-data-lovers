import datos from "./data/pokemon/pokemon.js";
const arregloPokemon = datos.pokemon.slice(0,19);

const vistaPokemon = document.getElementById("vistaPokemon");
function mostrarTarjetas(arregloPokemon) {
  for (let i = 0; i < arregloPokemon.length; i++) {
    vistaPokemon.innerHTML += `<article>
    <h1>${arregloPokemon[i].name}</h1> 
    <h2>Tipo:</h2>        
    <h3>${arregloPokemon[i].type}<h3/>
    <img src="${arregloPokemon[i].img}" alt="">
    <h4>Resistencia:</h4>
    <h5>${arregloPokemon[i].resistant}</h5>
    <h6>${arregloPokemon[i].num}</h6>
  </article>`;

  const tipos = (`${arregloPokemon[i].type}`);
  const totalTipos = [
    {type:'normal'},
    {type:'fire'},
    {type:'water'}
  ]; 
  console.log(tipos)
  console.log(totalTipos)
  }
}

const filtroPokemon = document.getElementById("filtrarPokemon");
function filtrarTarjetas(arregloPokemon) {
  for (let i = 0; i < arregloPokemon.length; i++) {
    vistaPokemon.innerHTML += `<article>      
    <h3>${arregloPokemon[i].type}<h3/>
  </article>`;

  const tipos = (`${arregloPokemon[i].type}`);
  /*const totalTipos = [
    {type:'normal'},
    {type:'fire'},
    {type:'water'}
  ]; */
  console.log(tipos)
  }
}

mostrarTarjetas(arregloPokemon);
filtrarTarjetas(arregloPokemon);