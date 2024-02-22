import NavBar from '../components/NavBar'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {


    return (
        <>
        <NavBar />

        <h1>WHOOPS WRONG PAGE</h1>
        
        </>
    )
}

export default ErrorPage