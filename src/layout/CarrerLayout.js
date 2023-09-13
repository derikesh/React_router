import { Outlet } from "react-router-dom";

function CarrerLayout() {
    return ( <>
    
        <div className="mb-10">
        <h1>Carrers</h1>
        <p>These are the jobs for you unemployed human begins</p>

        </div>

        <div>
            <Outlet/>
        </div>
        
    </> );
}

export default CarrerLayout;