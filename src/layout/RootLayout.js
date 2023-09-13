import { NavLink,Outlet } from "react-router-dom";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumb";

function RouterLayoutt() {
    return ( <>

<header>
        <nav className='flex justify-between '>
          
          <div>
          <h1 className='text-3xl font-bold'>Jobarouter</h1>
          </div>
          {/* link do not provide class to a atribute but navlink will provide 'active' for a active nav component */}
         
         <div className='nav_items   mx-aut0'>
            {/* there are the navitems used to navigate the routes ,these are parents say, */}
         <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='carrers'>Carrers</NavLink>
         </div>
        

        </nav>
        <BreadCrumbs/>
      </header>

      <main>
        <Outlet/>
      </main>

        </> );
}

export default RouterLayoutt;