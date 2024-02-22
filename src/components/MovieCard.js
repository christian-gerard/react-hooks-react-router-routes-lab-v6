import {Link} from 'react-router-dom';


function MovieCard({ movie: {id,title,time,genres }}) {
  

  return (
    <> 

    <article>
     <h1>{title}</h1>
     <Link to={`/movie/${id - 1}`}>View Movie</Link>
    </article>
    
    </>
  );
};

export default MovieCard;