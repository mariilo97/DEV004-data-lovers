

//No lo podemos borrar
import datos from './data/pokemon/pokemon.js'; 
const arregloPokemon = datos.pokemon.slice(0,18)

const vistaPokemon = document.getElementById('vistaPokemon')
function mostrarTarjetas(arregloPokemon){
    console.log(arregloPokemon);
    for(let i = 0; i < arregloPokemon.length; i++){
    vistaPokemon.innerHTML += `<article>
    <h1>${arregloPokemon[i].name}</h1> 
    <h2>Tipo:</h2>        
    <h3>${arregloPokemon[i].type}<h3/>
    <img src="${arregloPokemon[i].img}" alt="">
    <h4>Resistencia:</h4>
    <h5>${arregloPokemon[i].resistant}</h5>
    <h6>${arregloPokemon[i].num}</h6>
   </article>` // sugar sintax

    /*  const h1 = document.createElement('h1')
      h1.textContent = arregloPokemon[i].name
      vistaPokemon.appendChild(h1)*/
    }
    
    };

mostrarTarjetas(arregloPokemon)
//document.getElementById("root").innerHTML = pokemon; 

//const jsonPokemon=JSON.parse(name);
//console.log(typeof jsonPokemon);