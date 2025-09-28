import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./contactmodal.css";
import Loader from "../Loader/loader";
import { SuccessMessage, ErrorMessage } from "../../utils/toastify";

function ContactModal({ show, handleClose, onSubmitSuccess, project }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [errors, setErrors] = useState({});
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
    if (!phone_no.trim()) {
      newErrors.phone_no = "Contact No is required";
    } else if (!/^\d{10}$/.test(phone_no)) {
      newErrors.phone_no = "Contact No must be a 10-digit number.";
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
        phone_no: phone_no,
        isModal: true,
        project: project,
      };

  
      // fetch("https://servermain.rajavrukshagroup.in/contact", {
      fetch("https://rajavruksha-server.rajavrukshagroup.in/contact", {
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
          setPhone("");
          SuccessMessage("Your message has been submitted successfully!");
          onSubmitSuccess();
          handleClose();
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          ErrorMessage("An error occurred. Please try again.");
          handleClose();
          setIsLoading(false);
        });

      setErrors({});
    }
  };

  return (
    <>
      {isLoading && <Loader logo={false} />}{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Label>Email Address</Form.Label>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                name="phone_no"
                value={phone_no}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your contact number"
                isInvalid={!!errors.phone_no}
              />
              {errors.phone_no && (
                <Form.Control.Feedback type="invalid">
                  {errors.phone_no}
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
