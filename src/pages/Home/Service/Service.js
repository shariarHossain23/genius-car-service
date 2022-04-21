import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './service.css';

const Service = ({ service }) => {
  const { name, img, description, price,_id } = service;
  const navigate = useNavigate()
  const serviceDetails = id =>{
    navigate(`/service/${id}`)
  }
  return (
    <div>
      <div className="service">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>price:{price}</p>
        <p>
          Description:<small>{description}</small>
        </p>
        <Button variant="primary" onClick={()=> serviceDetails(_id)}>Book: {name}</Button>
      </div>
    </div>
  );
};

export default Service;
