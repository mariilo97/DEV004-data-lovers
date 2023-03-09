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
  } else if (name === "ordenar") {
    return arraySort;
  } else {
    return arraySort.reverse();
  }
}

export function mejoresPokemon(arregloPokemon) {
  // for (let index = 0; index < arregloPokemon.length; index++) {
  //   console.log(arregloPokemon[index].stats['max-cp']);

  // }
 const topPokemon=  arregloPokemon.forEach((element) => {
    const suma =
      Number(element.stats["base-attack"]) +
      Number(element.stats["base-defense"]) +
      Number(element.stats["base-stamina"]) +
      Number(element.stats["max-cp"]) +
      Number(element.stats["max-hp"]);
    const promedio = suma / 5;
      if (promedio >= 850) {
      return true;
    } else {
      return false;
    } 
})
return topPokemon
}
