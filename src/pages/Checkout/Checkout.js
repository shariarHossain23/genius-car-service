import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ServiceData from '../../CustomHook/ServiceData';
import auth from '../../firebase.init';

const Checkout = () => {
    const {serviceId} = useParams()
    const [services] = ServiceData(serviceId)
    const [user, loading, error] = useAuthState(auth);

    const handlePlaceOrder = event =>{
        event.preventDefault()
        const order ={
            email:user.email,
            serviceName:services.name,
            servicesid:serviceId,
            address:event.target.address.value,
            number:event.target.number.value
        }
        axios.post("http://localhost:5000/order",order)
        .then(response =>{
            const {data} = response
            if(data.insertedId){
                toast.success("your order is successfully")
                event.target.reset()
            }
        })
    }
   
    return (
        <div className='w-50 mx-auto mt-5'>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} readOnly disabled type="text" name="name" id="" placeholder='Name'/> <br />
                <input className='w-100 mb-2' value={user?.email} type="email" name="email" id="" placeholder='Email' readOnly disabled/> <br />
                <input className='w-100 mb-2' value={services.name} type="text" name="service" id="" placeholder='Service' readOnly disabled/> <br />
                <input className='w-100 mb-2' type="text" name="address" id=""  autoComplete='off'placeholder='Address'/> <br />
                <input className='w-100 mb-2' type="number" name="number" id="" placeholder='Number'/> <br />
                <input  className='btn btn-primary' type="submit" name="Submit" id="" value="submit"/> <br />
            </form>
            
        </div>
    );
};

export default Checkout;