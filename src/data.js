//export const pokemon = (tarjetas) => {
// return 'pokemon';
//};

export const anotherExample = () => {
  return "OMG";
};

export function filtrarTarjetas(arregloPokemon, type) {

  if (type === "") {
    return false;
  }
  const result = arregloPokemon.filter((element) =>
    element.type.includes(type)
  ); // version corta

  return result;
}
export function ordenarPokemon(arregloPokemon, name) {
  const arraySort = arregloPokemon.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  if (name === "") {
    return false;
  }
  else if (name === 'ordenar'){
    
  
    return arraySort;
  }
  else {
  
    return arraySort.reverse()
  }
}

export function mejoresPokemon(arregloPokemon){
  // for (let index = 0; index < arregloPokemon.length; index++) {
  //   console.log(arregloPokemon[index].stats['max-cp']);
    
  // }
  let pokemon1 = [];
  let pokemon2 = [];
  arregloPokemon.forEach((element)=>{
    const ataque= element.stats['base-attack'];
    const defensa= element.stats['base-defense'];
    const resistencia= element.stats['base-stamina'];
    const maxCP= element.stats['max-cp']; 
    const maxHP= element.stats['max-hp'];
    const suma = (Number (ataque)) + (Number (defensa)) + (Number (resistencia))+ (Number (maxCP)) + (Number (maxHP));

    if(pokemon1 > pokemon2){
      return pokemon1
    }
    if (pokemon1 < pokemon2){
      return pokemon2
    }else if (pokemon1 === pokemon2){
    return pokemon1 && pokemon2
    }
    console.log(element.stats)
    console.log(suma)

  })

}


