import { filtrarTarjetas, ordenarPokemon, mejoresPokemon } from "../src/data.js";

describe("filtrarTarjetas", () => {
  it("is a function", () => {
    expect(typeof filtrarTarjetas).toBe("function");
  });

  const dataPokemon = [
    {
      num: "001",
      name: "bulbasaur",
      type: ["grass", "poison"],
    },
    {
      num: "004",
      name: "charmander",
      type: ["fire"],
    },
    {
      num: "013",
      name: "weedle",
      type: ["bug", "poison"],
    },
    {
      num: "022",
      name: "fearow",
      type: ["normal", "flying"],
    },
    {
      num: "056",
      name: "mankey",
      type: ["fighting"],
    },
  ];
  it("returns filter", () => {
    const result = [
      {
        num: "004",
        name: "charmander",
        type: ["fire"],
      },
    ];
    expect(filtrarTarjetas(dataPokemon, "fire")).toStrictEqual(result);
  });
  it("returns vacío", () => {

    expect(filtrarTarjetas(dataPokemon, "")).toBeFalsy();
  });
});

describe("ordenarPokemon", () => {
  it("is a function", () => {
    expect(typeof ordenarPokemon).toBe("function");
  });

  const aOrdenar = [
    {
      num: "001",
      name: "bulbasaur",
    },
    { num: "022", name: "fearow" },
    {
      num: "013",
      name: "weedle",
    },

    {
      num: "004",
      name: "charmander",
    },
    {
      num: "056",
      name: "mankey",
    }
  ];
  it("returns order", () => {
    const ordenado = [
      {
        num: "001",
        name: "bulbasaur",
      },
      {
        num: "004",
        name: "charmander",
      },
      { num: "022", name: "fearow" },
      {
        num: "056",
        name: "mankey",
      },
      {
        num: "013",
        name: "weedle",
      }
    ];

    expect(ordenarPokemon(aOrdenar, "ordenar")).toStrictEqual(ordenado);
    expect(ordenarPokemon(aOrdenar, "reversa")).toStrictEqual(ordenado.reverse());
    expect(ordenarPokemon(aOrdenar, "")).toBeFalsy()
  });
  // it("returns vacío", () => {
  //   expect(ordenarPokemon(dataPokemonOrder, "")).toBeFalsy();
  // });
});


describe('mejoresPokemon', () => {
  it('is a function', () => {
    expect(typeof mejoresPokemon).toBe('function');
  });
  const dataPokemonTop = [
    {
      num: "001",
      name: "bulbasaur",
      stats: {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
    },
    {
      num: "004",
      name: "charmander",
      stats: {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      },
    },
    {
      num: "130",
      name: "gyarados",
      stats: {
        "base-attack": "237",
        "base-defense": "186",
        "base-stamina": "216",
        "max-cp": "3391",
        "max-hp": "182"
      },
    },
    {
      num: "022",
      name: "fearow",
      stats: {
        "base-attack": "182",
        "base-defense": "133",
        "base-stamina": "163",
        "max-cp": "1997",
        "max-hp": "140"
      },
    },
    {
      num: "150",
      name: "mewtwo",
      stats: {
        "base-attack": "300",
        "base-defense": "182",
        "base-stamina": "214",
        "max-cp": "4178",
        "max-hp": "180"
      }
    },
  ];
  it("return top", () => {
    const resultado = [
      {
        num: "130",
        name: "gyarados",
        stats: {
          "base-attack": "237",
          "base-defense": "186",
          "base-stamina": "216",
          "max-cp": "3391",
          "max-hp": "182"
        },
      },
      {
        num: "150",
        name: "mewtwo",
        stats: {
          "base-attack": "300",
          "base-defense": "182",
          "base-stamina": "214",
          "max-cp": "4178",
          "max-hp": "180"
        }
      }
    ];
    expect(mejoresPokemon(dataPokemonTop, "mewtwo", "gyarados")).toStrictEqual(resultado);
  });
  /*it("return vacío", () => {

    expect(mejoresPokemon(dataPokemonTop, "")).toBeFalsy();
  });*/
})