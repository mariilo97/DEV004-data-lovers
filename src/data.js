export const pokemon = (tarjetas) => {
  return 'pokemon';
};


export const anotherExample = () => {
  return 'OMG';
};

export function filtrarTarjetas(arregloPokemon, type) {
  const result = arregloPokemon.filter(element => element.type.includes(type)) // version corta
  
  return result
};