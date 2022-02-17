import React ,{useContext} from 'react';
import '../pages/Form.css';
import {Link, useNavigate} from "react-router-dom";


const FormSuccess = () => {

 


  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Signed in completely</h1>
      <img className='form-img-2' src='images/img-3.svg' alt='success-image' />
      {/* <button className='form-input-btn'  onClick ={onClick}>
          To see details of all events.
        </button> */}
       <Link to="/detailarrange" >To see details of all events.</Link> 
    </div>
  );
};

export default FormSuccess;
