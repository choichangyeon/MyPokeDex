import styled, { css } from "styled-components";

const Type = ({ type, page }) => {
  return <TypeBox src={matchingFiles(type)} page={page} />;
};

const matchingFiles = (type) => `/image/${TypeName[type]}.svg`;

const TypeName = {
  노말: "normal",
  드래곤: "dragon",
  불꽃: "fire",
  물: "water",
  전기: "electric",
  풀: "grass",
  얼음: "ice",
  격투: "fighting",
  독: "poison",
  땅: "ground",
  비행: "flying",
  에스퍼: "psychic",
  벌레: "bug",
  바위: "rock",
  고스트: "ghost",
  강철: "steel",
  악: "dark",
  페어리: "fairy",
};

const TypeBox = styled.img`
  ${(props) => {
    switch (props.page) {
      case "Details":
        return css`
          width: 60px;
        `;
      case "Dex":
        return css`
          width: 20px;
        `;
      default:
        return css`
          width: 30px;
        `;
    }
  }};
`;

export default Type;
