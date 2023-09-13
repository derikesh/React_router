import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import RouterLayout from "./layout/RootLayout";
import Helplayoutt from "./layout/Helplayout";
import Faq from "./Components/Help/Faq";
import Contact from "./Components/Help/Contact";
import ErrorCatch from "./Components/Eroor";
import CarrerLayout from "./layout/CarrerLayout";
import Carrers from "./Components/Carrers/Careers";
import { LoaderFunction } from "react-router-dom";
// importing function from careers js file 
import { loadJsx } from "./Components/Carrers/Careers";

import CarrerDetail from "./Components/Carrers/CarrerDetail";
import { Jobdetailfunction } from "./Components/Carrers/CarrerDetail";
import CError from "./Components/Carrers/CarrerError";
import { FormAction } from "./Components/Help/Contact";

// installing a route in brower with creatbrowerrouter

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      {/* there are the actual roots react tell to fetch the datas the routes ,with path and element to be fetch */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

{/* help route */}
      <Route path="help" element={<Helplayoutt />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" action={FormAction} element={<Contact />} />
      </Route>

{/* new carrer router */}
      <Route path="carrers" element ={<CarrerLayout/>} errorElement= {<CError/>}>
        {/* displaying all the jobs */}
        <Route
         index 
         loader={loadJsx}
         element={<Carrers/>}
        //   this will load the function only when this compoennt is in use which reduces the laod in overall website
         />

         {/* displaying job detail */}
         <Route
         path=":ii"
         element={<CarrerDetail/>}
        //  this will fetch the link to asyn function with dyamic params value passed from :id 
         loader={Jobdetailfunction}
         
         />
      </Route>

{/* 404 page route */}
      <Route path="*" element={<ErrorCatch/>}/>
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="max-w-9xl container mx-auto w-100">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;


