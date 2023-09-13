import { NavLink, Outlet } from "react-router-dom";


// Layout are like pages in website , we have set main root and help layout here in site this is the 

function Helplayoutt() {
    return ( <>
    
        <h2>Website Hlep</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem perspiciatis minima enim fugit aperiam officia, reiciendis ex beatae nostrum, ullam minus voluptates laborum blanditiis quisquam ad at, suscipit non.</p>

        <nav className="flex gap-7">
            
            <NavLink to ='faq'>View Faq</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>

        </nav>

        <div className="mt-12">
        <Outlet/>
        </div>

    </> );
}

export default Helplayoutt;