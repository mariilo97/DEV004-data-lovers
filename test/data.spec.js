import { filtrarTarjetas, ordenarPokemon } from "../src/data.js";

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

  const dataPokemonOrder = [
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
      num: "013",
      name: "weedle",
    },
    {
      num: "056",
      name: "mankey",
    },
  ];
  it("returns order", () => {
    const resultOrder = [
      {
        num: "004",
        name: "charmander",
      },
    ];
    expect(ordenarPokemon(resultOrder, "charmander")).toStrictEqual(
      resultOrder
    );
  });
  it("returns vacío", () => {
    expect(ordenarPokemon(dataPokemonOrder, "")).toBeFalsy();
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
