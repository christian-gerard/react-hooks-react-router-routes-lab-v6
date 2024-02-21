import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import routes from "./routes";
import NavBar from './components/NavBar'

const router = createBrowserRouter(routes)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
