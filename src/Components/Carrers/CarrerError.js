import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function CError() {

    const errorMessage = useRouteError();

    return ( <>
    
        <h1>THERE HAS BEEN A ERROR</h1>
        <h2>{errorMessage.message}</h2>
        <Link to='/'>Return to home page</Link>

    </> );
}

export default CError;