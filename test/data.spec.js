import { filtrarTarjetas } from '../src/data.js';


describe('filtrarTarjetas', () => {
  it('is a function', () => {
    expect(typeof filtrarTarjetas).toBe('function');
  });


  const dataPokemon = [
    {
      "num": "001",
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]
    },
    {
      "num": "004",
      "name": "charmander",
      "type": [
        "fire"
      ]
    },
    {
      "num": "013",
      "name": "weedle",
      "type": [
        "bug",
        "poison"
      ]
    },
    {
      "num": "022",
      "name": "fearow",
      "type": [
        "normal",
        "flying"
      ]
    },
    {
      "num": "056",
      "name": "mankey",
      "type": [
        "fighting"
      ]
    }
  ];
  it('returns filter', () => {
    const result = [
      {
        "num": "004",
        "name": "charmander",
        "type": [
          "fire"
        ]
      },
    ]
    expect(filtrarTarjetas(dataPokemon, "fire")).toStrictEqual(result);
  });
  it('returns vacío', () => {
    expect(filtrarTarjetas(dataPokemon, "")).toBeFalsy();
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
