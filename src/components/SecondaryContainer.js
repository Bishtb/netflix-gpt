import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
   <div className="bg-black"> 
    <div className='-mt-52 relative z-20 overflow-x-hidden'> 
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies  } /> 
      <MovieList title={"Popular"} movies={movies.nowPopularMovies  } /> 
      <MovieList title={"Top-Rated"} movies={movies.nowTopRatedMovies  } /> 
      <MovieList title={"Upcoming movies"} movies={movies.nowUpcomingMovies  } />  
    </div>
    </div>
  )
}

export default SecondaryContainer