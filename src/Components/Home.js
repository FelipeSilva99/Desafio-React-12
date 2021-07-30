import React, { Component } from "react";
import styled from "styled-components";

const Back = styled.div`
  background-size: 100%;
  background: #141414;
  height: 100vh;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TMovie = styled.h2`
  font-size: 50px;
  border-radius: 5px;
  font-family: "Encode Sans SC", sans-serif;
  color: white;
`;

const TSerie = styled.h2`
  font-size: 50px;
  border-radius: 10px;
  font-family: "Encode Sans SC", sans-serif;
  color: white;
`;

const Filmes = styled.div`
  width: 35%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(110%);
  }
`;

const Series = styled.div`
  width: 35%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(110%);
  }
`;

class Header extends Component {
  render() {
    return (
      <Back>
        <Filmes>
          <TMovie>FILMES</TMovie>
        </Filmes>
        <Series>
          <TSerie>SERIES</TSerie>
        </Series>
      </Back>
    );
  }
}
export default Header;
