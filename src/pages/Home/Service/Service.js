import React from "react";
import './service.css';

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div>
      <div className="service">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>price:{price}</p>
        <p>
          Description:<small>{description}</small>
        </p>
        <button>Book: {name}</button>
      </div>
    </div>
  );
};

export default Service;
