import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const backDex = () => {
    navigate("/dex");
  };
  return (
    <>
      <div>Details</div>
      <button onClick={backDex}>뒤로 가기</button>
    </>
  );
};

export default Details;
