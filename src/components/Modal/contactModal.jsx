import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./contactmodal.css";
import Loader from "../Loader/loader";

function ContactModal({ show, handleClose, onSubmitSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      const formData = {
        name: name,
        email: email,
        isModal: true,
      };

      // Perform the POST request to submit the form data
      //http://localhost:3000/contact
      //https://rajavruksha-server.vercel.app/contact
      fetch("https://servermain.rajavrukshagroup.in/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form submitted successfully:", data);
          setIsLoading(false);
          setName("");
          setEmail("");
          alert("Your message has been submitted successfully!");
          onSubmitSuccess(); // Trigger the download action
          handleClose(); // Close the modal
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          alert("An error occurred. Please try again.");
          handleClose();
          setIsLoading(false); // Stop the loader even on error
        });

      setErrors({});
    }
  };

  return (
    <>
      {isLoading && <Loader logo={false} />}{" "}
      {/* Show loader during form submission */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )} */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                isInvalid={!!errors.name}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                isInvalid={!!errors.email}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="me-2"
              >
                Close
              </Button>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;
