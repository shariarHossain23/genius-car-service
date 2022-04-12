import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <Col sm={12} md={6} lg={4} className="gx-5 mt-5">
      <Card style={{ width: "18rem" }}className="w-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
