import React from "react";
import emailjs from 'emailjs-com'
import {ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Form(){


    const sendEmail =(e) => {
        e.preventDefault() ; 
        emailjs.sendForm('service_5bc78ou' , 'template_gof079k' , e.target , 'BBGmxedmH_mbxUpEm')
        .then((result) => {
            if(result.status === 200){
                toast.success("Your message sent to Amin" ,{position: "top-right", closeOnClick: true})
            }
        },(err) =>{
            console.log(err)
            toast.error("I couldn't send your message " , {position:"top-right" , closeOnClick:true})
        })
        
    }
    return(
        <div className='row mt-2 mb-5' >
                    <div className='col-4 m-auto mt-5 border-white bg-white border-1  p-5 rounded' >
                        <h2 className='text-center mb-3 text-primary pb-4 border-bottom border-dark'>Request to Admin</h2>
                        <form  onSubmit={sendEmail}>
                            <fieldset>
                                <div className='form-group row'>
                                    <div className='col-sm-6'>
                                        <input name="name" className='form-control me-3 mb-3' placeholder='Name' />
                                    </div>
                                    <div  className='col-sm-6'>
                                        <input name="Last_name" className='form-control' placeholder='Family Name' /> 
                                    </div>
                                </div>
                                
                                <input type='email' className='form-control mb-3' placeholder='Email Adress' /> 

                                <textarea name="message" className='form-control mb-3' placeholder='Write Something...'></textarea>
                            </fieldset>
                            <button type="submit" className='btn btn-success col-12'>Send</button>
                        </form>
                    </div>
                    <ToastContainer /> 
                </div>
    )
}

export default Form