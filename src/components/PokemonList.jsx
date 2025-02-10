import styled from "styled-components";
import MOCK_DATA from "@constants/MOCK_DATA";
import PokemonCard from "@components/PokemonCard";

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
  border: 5px outset black;
  border-radius: 5px;
  padding: 30px 0 0 0;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
`;

export default PokemonList;
