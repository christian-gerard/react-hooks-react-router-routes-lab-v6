import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Directors() {
  const [directors, setDirectors] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(resp => resp.json())
    .then(data => {

      const renderedDirectors = data.map((d) => (
      
      
        <article>
          <h2>{d.name}</h2>
          <ul>
            {d.movies.map((movie) => <li>{movie}</li>)}
          </ul>
        </article>
        
      ))

      setDirectors(renderedDirectors)


    })

  }, [])

  console.log(directors)

  return (
    <>
      <NavBar />
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors}
      </main>
    </>
  );
};

export default Directors;
