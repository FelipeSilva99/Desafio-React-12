import React, { Components } from 'react';
import Movies from "../src/Movies.js"


class Netflix extends Components {
  state = {
    movies: [],
    series: []
  }

  componentDidMount() {
    this.getMovies()
    this.getSeries()
  }

  getMovies = async () => {
    const response = await Movies.get()
    console.log("Filmes", response.data.results)

    const completeMovies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      }
    })

    this.setState({
      movies: completeMovies
    })
  }

  getSeries = async () => {
    const response = await Series.get()
    console.log("Series", response.data.results)

    const completeSeries = response.data.results.map((item) => {
      return {
        ...item,
        backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      }
    })

    this.setState({
      series: completeSeries
    })
  }

  render() {
    return (
      <section>
        <div>
          {this.state.movies.map((itemM, index) => (
            <ul key={index}>
              <li>{itemM.title}</li>
              <li>{itemM.vote_average}</li>
              <img src={itemM.props.poster_path} alt={`poster filme popular ${itemM.title}`} />
            </ul>
          ))}
        </div>
        <div>
          {this.state.series.map((itemS, index) => (
            <ul key={index}>
              <li>{itemS.name}</li>
              <li>{itemS.average}</li>
              <img src={itemS.props.backdrop_path} alt={`poster serie popular ${itemS.name}`} />
            </ul>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
