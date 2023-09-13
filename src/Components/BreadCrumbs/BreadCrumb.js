// bread crump
import { Divider } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function BreadCrumbs() {

    const currentLocation = useLocation();

    let location = '';

    let Crumbs = currentLocation.pathname.split('/').filter( crumb=> crumb !== '' )
        .map( crumbb => {

            location += `/${crumbb}`;

            return(
             <div className="crumb" key={crumbb}>
                <Link to={location}> {crumbb} </Link>
             </div>
            )

        } )
    


    return ( 
    <>
        
       <div className="flex">
       {Crumbs}
       </div>

    </> 
    );
}

export default BreadCrumbs;