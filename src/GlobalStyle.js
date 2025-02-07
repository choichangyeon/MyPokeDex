import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "PokemonDPPT";
    src: url("/src/assets/fonts/pokemon-dppt.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  body,button {
    font-family: "PokemonDPPT", sans-serif;
  }
`;

export default GlobalStyle;
