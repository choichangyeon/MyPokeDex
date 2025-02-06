import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../constants/MOCK_DATA";
import styled from "styled-components";

const PokemonList = () => {
  const pokemonList = MOCK_DATA;

  return (
    <ListBox>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id}
            action="ADD"
            type="PokemonList"
          ></PokemonCard>
        );
      })}
    </ListBox>
  );
};

const ListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  border: 1px double black;
  border-radius: 5px;
  padding: 30px 0 0 0;
  background-color: #f0f0f0;
`;

export default PokemonList;
