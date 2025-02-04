import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  const BorderBox = styled.div`
    width: 100%;
    height: 200px;
    border: 2px blue solid;
  `;
  return (
    <BorderBox>
      <div>Dashboard</div>
    </BorderBox>
  );
};

export default Dashboard;
