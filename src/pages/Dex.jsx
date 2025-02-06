import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Dex = () => {
  const scrollState = useSelector((state) => state.position);

  useEffect(() => {
    window.scrollTo(0, scrollState.position);
  }, [scrollState.position]);

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
