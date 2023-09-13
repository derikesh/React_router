import { Form, redirect, useActionData } from "react-router-dom";


function Contact() {

const data = useActionData();

    return ( <>
    
        <div className="contact_form mt-5">

        <h3>Contact Form</h3>

        <Form className="flex flex-col gap-12 w-fit mt-5" method="post" action="/help/contact">

            <label htmlFor="name">
                <span>Your Name </span>
                <input name="name" type="text" />
            </label>

          

            <label htmlFor="name">
                <span>Message</span>
                <input name="message" type="text" />
            </label>

           
            <button className="bg-cyan-500 px-4 py-2 hover:bg-cyan-800 w-fit">Submit</button>
           
        </Form>

        <div className="message_error">
        {data && data.error && <p>{data.error}</p>}
        </div>

        </div>


    </> );
}

export default Contact;


// creating a function to pass all the data filed from the "From" 
// request in this acts as the object 

export const FormAction = async ( {request} )=>{


    const data = await request.formData();

    const datas = {

        name : data.get('name'),
        message:data.get('message'),

    }

    // to thro a error we make a condition and throw error

    if( datas.message.length < 10  ){
        return {error:'message has to be greater than 10 chars'}
    }

   

    return redirect('/');


}