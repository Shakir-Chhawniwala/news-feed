import React from "react";
import { Form } from "react-bootstrap";

const FeedBackForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="John" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Doe" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your full Postal Address"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address:</Form.Label>
        <Form.Control placeholder="India" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="example@sample.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="number" placeholder="123456789" />
      </Form.Group>
    </Form>
  );
};

export default FeedBackForm;
