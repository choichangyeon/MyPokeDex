import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

const Dex = () => {
  const addPokemon = (pokemon) => {
    if (Lineup.length === 6) {
      alert("라인업이 이미 완성되어있습니다!");
      return;
    }
    setLineup(() => {
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

  const [Lineup, setLineup] = useState([]);

  return (
    <>
      <Dashboard pokemonDelete={removePokemon} Lineup={Lineup}></Dashboard>
      <PokemonList pokemonSelect={addPokemon}></PokemonList>;
    </>
  );
};

export default Dex;
