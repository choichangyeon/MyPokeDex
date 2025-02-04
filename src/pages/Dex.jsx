import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

const Dex = () => {
  const pokemonSelect = (pokemon) => {
    if (Lineup.length === 6) {
      alert("라인업이 이미 완성되어있습니다!");
      console.log(Lineup);
      return;
    }
    console.log(pokemon);
    setLineup(() => {
      return [...Lineup, pokemon];
    });
  };

  const pokemonDelete = (id) => {};

  const [Lineup, setLineup] = useState([]);
  return (
    <>
      <Dashboard pokemonDelete={pokemonDelete} Lineup={Lineup}></Dashboard>
      <PokemonList pokemonSelect={pokemonSelect}></PokemonList>;
    </>
  );
};

export default Dex;
