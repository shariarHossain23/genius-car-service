import React, { useEffect, useState } from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/service")
        .then(res => res.json())
        .then(data => setServices(data) )
    },[])
    return (
        <div id='services'>
            <PageTitle title={"services"}></PageTitle>
            <h1 className='text-center text-primary mt-5'>Our services</h1>
            <div className='services-container'>
                {
                   services.map(service => <Service key={service._id} service = {service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;