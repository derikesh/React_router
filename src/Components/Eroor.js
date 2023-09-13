import {Link} from 'react-router-dom'

function ErrorCatch() {
    return ( <>
    
        <h1>No Page Found here</h1>
        <button>Return to <Link to='/'>Home Page </Link></button>

    </> );
}

export default ErrorCatch;