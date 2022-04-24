import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders,setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const handleOrsers = async () =>{
            const email = user.email
            const url = `http://localhost:5000/order?email=${email}`
           try {
            const {data}= await axios.get(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('dataToken')}`
                }
            })
            setOrders(data)
           } catch (error) {
               if(error.response.status === 401 || error.response.status === 403){
                   signOut(auth)
                   navigate('/login')
               }
           }
        }
        handleOrsers()
    },[user])
    return (
        <div>
            <h3>this is order{orders.length}</h3>
        </div>
    );
};

export default Orders;