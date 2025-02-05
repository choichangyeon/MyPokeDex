import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const Dex = () => {
  return (
    <DexLayout>
      <Dashboard />
      <PokemonList />
    </DexLayout>
  );
};

const DexLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default Dex;
