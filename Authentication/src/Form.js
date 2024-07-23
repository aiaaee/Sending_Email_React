import React from "react";


function Form(){
    return(
        <div className='row mt-2 mb-5' >
                    <div className='col-4 m-auto mt-5 border-white bg-white border-1  p-5 rounded' >
                        <h2 className='text-center mb-3 text-primary pb-4 border-bottom border-dark'>Request to Admin</h2>
                        <from>
                            <fieldset>
                                <div className='form-group row'>
                                    <div className='col-sm-6'>
                                        <input className='form-control me-3 mb-3' placeholder='Name' />
                                    </div>
                                    <div  className='col-sm-6'>
                                        <input className='form-control' placeholder='Family Name' /> 
                                    </div>
                                </div>
                                
                                <input type='email' className='form-control mb-3' placeholder='Email Adress' /> 

                                <textarea className='form-control mb-3' placeholder='Write Something...'></textarea>
                            </fieldset>
                            <button className='btn btn-success col-12'>Send</button>
                        </from>
                    </div>
                </div>
    )
}

export default Form