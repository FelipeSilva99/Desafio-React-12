import React, { Component } from "react";
import styled from "styled-components";

import axios from "axios";

const Back = styled.div`
  background: #141414;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const Poster = styled.img`
  width: 50%;
`;

const Movie = styled.div`
  width: 30%;
  display: flex;
  padding: 10px;
  border: solid #fff 2px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px ;
`;

const Item = styled.li`
  list-style: none;
  text-align-last: center;
  width: auto;
  color: #dcdcdc;
  font-size: 15px;
  border-radius: 10px ;
  margin-top: 4%;
  padding: auto;
  cursor: pointer;
  background-image: linear-gradient(#5564D9, #61EBF8);
`;

const Search = styled.div`
  background-image: linear-gradient(#4F4F4F,#4F4F4F);
  width: 100%;
  height: 35px;
  position: fixed;
  top: 49px;
`;

const Barra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 25px;
  align-items: center;
  color: #dcdcdc;
`;

const Input = styled.input`
  border-radius: 10px;
  border: none;
  outline: none;
  height: 70%;
  font-size: 20px;
  display: flex;
`;

const MoviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=9ee0625ec1497a4cdf5fe83af271b55a&language=pt-BR"
});

class Main extends Component {
  state = {
    movies: [],
    filterItem: []
  };

  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const response = await MoviesApi.get();

    const completeMovies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path} `
      };
    });
    this.setState({
      movies: completeMovies,
      filterItem: completeMovies
    });
    console.log(completeMovies);
  };

  handleChange = (event) => {
    const { movies } = this.state;

    if (event.target.value === "") {
      this.setState({
        filterItem: movies
      });
      return;
    }
    const filterItemConvert = movies.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
      return false;
    });
    this.setState({
      filterItem: filterItemConvert
    });
  };

  render() {
    return (
      <Back>
        <Search>
          <Barra>
            <Input onChange={this.handleChange} placeholder="Qual filme?" />
          </Barra>
        </Search>
        {this.state.filterItem.map((item, id) => (
          <Movie key={id}>
            <Poster src={item.poster_path} alt="Poster" />
            <Title>{item.title}</Title>
            <ul>
              <Item>Sínopse: {item.overview}</Item>
              <Item>Nota: {item.vote_average}</Item>
            </ul>
          </Movie>
        ))}
      </Back>
    );
  }
}
export default Main;
