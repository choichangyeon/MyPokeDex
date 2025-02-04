import React, { useEffect } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

const Dex = () => {
  useEffect(update, Lineup);
  return (
    <>
      <Dashboard Lineup={Lineup}></Dashboard>
      <PokemonList select={select}></PokemonList>;
    </>
  );
};

let Lineup = [];

const update = () => {};
const select = (pokemon) => {
  if (Lineup.length === 6) {
    alert("라인업이 이미 완성되어있습니다!");
    console.log(Lineup);
    return;
  }
  console.log(pokemon);
  Lineup.push(pokemon);
};

export default Dex;
