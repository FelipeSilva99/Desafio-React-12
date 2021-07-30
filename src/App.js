import React, { Component } from "react";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import styled from "styled-components";
import "../src/App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-family: "Encode Sans SC", sans-serif;
  height: 70px;
  color: #dcdcdc;
  font-size: 25px;
  text-decoration: none;

  cursor: pointer;
  &:hover {
    transform: scale(110%);
    border-radius: 10px 10px 10px 10px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  color: #dcdcdc;
  list-style: none;
  background-image: linear-gradient(#1C1C1C, #4F4F4F	);
`;

const Item = styled.li`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    // transform: scale(110%);
    border-radius: 10px;
  }
`;

const Back = styled.div`
  background: #141414;
`;

const Header = styled.nav`
  position: fixed;
  width: 100%;
  top: -1px;
  z-index: 1;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Back>
        <div>
          <Header>
            <List>
              <Item>
                <StyledLink to="/">INICIO</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/movies">FILMES</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/series">SERIES</StyledLink>
              </Item>
            </List>
          </Header>
        </div>
        <Switch>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Back>
      </Router>
    );
  }
}

export default App;
