import NavBar from "./components/NavBar";
import MovieCard from './components/MovieCard'
const routes = [
   {
    path: '/moviecard',
    element: <MovieCard />
   },
   {
    path: '/',
    element: <MovieCard />
   }
  ];

export default routes;