import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/service")
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])

    const handleDelete = id =>{
        const procced = window.confirm("are you sure")
        if(procced){
            const url =`http://localhost:5000/service/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const newUser = services.filter(service => service._id !== id)
                    setServices(newUser)
                }
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>this is manage</h2>
            {
                services.map(service => <div key={service._id}
                >
                    <h4>{service.name} <button onClick={()=> handleDelete(service._id)}>x</button></h4>
                </div>)
            }
        </div>
    );
};

export default Manage;