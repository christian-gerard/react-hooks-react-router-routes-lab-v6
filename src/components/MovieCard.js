import {Link} from 'react-router-dom';
import NavBar from './NavBar';

function MovieCard({title}) {
  
  return (
    <> 
    <NavBar />
    <article>
        
        <h2>{title}</h2>
        <h1>Movie Card</h1>
        {/* What should go here? */}
    </article>
    
    </>
  );
};

export default MovieCard;