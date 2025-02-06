import { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [Lineup, setLineup] = useState([]);

  const addPokemon = (pokemon) => {
    if (Lineup.length === 6) {
      alert("라인업이 이미 완성되어있습니다!");
      return;
    }
    if (Lineup.find((poke) => poke.id === pokemon.id)) {
      alert("라인업에 존재하는 포켓몬입니다.");
      return;
    }
    setLineup(() => {
      alert(`${pokemon.korean_name}을 라인업에 추가했습니다!`);
      return [...Lineup, pokemon];
    });
  };

  const removePokemon = (pokemon) => {
    setLineup(() =>
      Lineup.filter((poke) => {
        if (poke.id !== pokemon.id) {
          return poke;
        }
      })
    );
  };

  return (
    <PokemonContext.Provider value={{ addPokemon, removePokemon, Lineup }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext };
export default PokemonContextProvider;
