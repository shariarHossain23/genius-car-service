import { useEffect, useState } from 'react';

const ServiceData = (id) => {
    const [services,setServices] = useState("")
    useEffect(()=>{
        const url =`http://localhost:5000/service/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[id])
    return [services,setServices]
};

export default ServiceData;