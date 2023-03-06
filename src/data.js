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

