import React, { useEffect } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

const Dex = () => {
  useEffect(select, Lineup);
  return (
    <>
      <Dashboard Lineup={Lineup}></Dashboard>
      <PokemonList></PokemonList>;
    </>
  );
};

let Lineup = [];

const select = () => {};

export default Dex;
