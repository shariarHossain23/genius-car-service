import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceData from '../../../CustomHook/ServiceData';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const navigate = useNavigate()
    const handleClick = (serviceId) =>{
        navigate(`/checkout/${serviceId}`)
    }
   const [services] = ServiceData(serviceId)
    return (
        <div>
           <h1>this is service details {services.name}</h1> 
           <h3></h3>
           <div className='mt-5 text-center'>
            <Button onClick={()=> handleClick(serviceId)} variant='danger'>Checkout</Button>
           </div>
        </div>
    );
};

export default ServiceDetails;