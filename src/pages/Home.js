import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

function Home() {
 
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then(resp => resp.json())
    .then(movies => setMovies(movies))

  },[movies])

  const renderedMovies = movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)

  return (
    <>
    <NavBar />
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {renderedMovies}
      </main>
    </>
  );
};

export default Home;
