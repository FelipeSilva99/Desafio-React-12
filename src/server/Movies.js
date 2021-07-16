import axios from 'axios'

const MoviesApi = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=71bd70cc2e00adf2cd7a0655be907392"
})

export default MoviesApi