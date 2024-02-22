import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'
import { render } from "@testing-library/react";
import {v4 as uuidv4} from 'uuid'

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(resp => resp.json())
    .then(data => {

      const renderedActors = data.map((actor) => (
        <article key={uuidv4()}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => <li key={uuidv4()}>{movie}</li>)}
          </ul>
        </article>

      ))

      setActors(renderedActors)
    })

  }, [])
  return (
    <>
      <NavBar />
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors}
      </main>
    </>
  );
};

export default Actors;
