import axios from "axios";
import { useParams , useLoaderData } from "react-router-dom";

function CarrerDetail() {

    // now the data from loader function which the function below exported , we'll be storing its data to a varibale 

    const jobdes = useLoaderData()


    return ( <>
    
   <div className="bg-slate-800 p-14 flex flex-col gap-8">


   <h1 className="text-2xl font-bold">Carrer Detail For {jobdes.title}: </h1>
    <h2 className="text-xl">Job Location : {jobdes.location} </h2>
    <h2>Salary : {jobdes.salary}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa reprehenderit quas temporibus amet illo alias repellat aperiam facere dolorem ea tenetur dolor blanditiis, possimus explicabo nobis. Dolorum, voluptas illum.</p>
    

   </div>
    </> );
}

export default CarrerDetail;


// data to fetch dat and use param to indicate the url 

export const Jobdetailfunction = async ( {params} )=>{

    const {ii} = params;

   try {

    const paramLink = await axios.get(`http://localhost:3000/careers/${ii}`)
    return paramLink.data;


   } catch(err){
    throw Error(err+'there has been a error')
}


} 