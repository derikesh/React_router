import { Link } from "react-router-dom";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function Carrers() {

    const loadJsx = useLoaderData();

    return (
         <>

         {loadJsx ? (<> { loadJsx.map( (job)=>(

            ( <Link to={job.id.toString()}>
                
               <div className="my-5 bg-cyan-900 px-6 py-6 jpb_wrap">
                 <h3>{job.title}</h3>
                <span>Based on {job.location}</span>
               </div>
            </Link> )
         ) ) } </>) : ( <h2>Loading </h2> )}

        </> 
        );
}

export default Carrers;

// making a function that will load intially when this componen is active 

export const loadJsx = async ()=>{

   try{
   const jobs =(await axios.get('http://localhost:3000/careers')).data;
    return jobs

   }

    catch(err) {
      throw Error('there has been a mistake' + err)
    }


}