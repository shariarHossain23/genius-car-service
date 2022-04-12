import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className=" mt-5 p-5 text-center">
        <h1>404 not found</h1>
        <Button onClick={handleBack} variant="danger">Go Back</Button>
      </div>
    </div>
  );
};

export default Notfound;
