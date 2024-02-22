import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import NavBar from '../components/NavBar'

function Movie() {
  const movieData = Number(useParams().id)

  const [movData, setMovData] = useState({})
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieData}`)
    .then(resp => resp.json())
    .then(data => {
      setMovData(data);
      if(data.genres) {
        const g = data.genres.map((gen) => <span key={uuidv4()}>{gen}</span>)
        setGenres(g)
      }
    
      
    })

  },[])

  console.log(genres)

  return (
    <>
      <NavBar />
      <header>
        <h1>{movData.title}</h1>
      </header>
      <main>
        <p>{movData.time}</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
