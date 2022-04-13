import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/checkout')
    }
    return (
        <div>
           <h1>this is service details {serviceId}</h1> 
           <div className='mt-5 text-center'>
            <Button onClick={()=> handleClick()} variant='danger'>Checkout</Button>
           </div>
        </div>
    );
};

export default ServiceDetails;