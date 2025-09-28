

import React, { useState } from "react";
import { SuccessMessage,ErrorMessage } from "../../utils/toastify";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    notes: "",
    phone_no: "",
  });
  
  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    notes: "",
    phone_no: "",
  });
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    let formErrors = { ...error };
    
    if (formData.name === "") formErrors.name = "Please enter name";
    if (formData.email === "") {
      formErrors.email = "Please enter email";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (formData.subject === "") formErrors.subject = "Please enter subject";
    if (formData.lastname === "") formErrors.lastname = "Please enter lastname";
    if (formData.notes === "") formErrors.notes = "Please enter notes";
    if (formData.phone_no === "") formErrors.phone_no = "Please enter number";
    
    setError(formErrors);
    
    const hasErrors = Object.values(formErrors).some((err) => err !== "");
    if (hasErrors) return;
    
    try {
      // const response = await fetch("https://servermain.rajavrukshagroup.in/contact", {
      const response = await fetch("https://rajavruksha-server.rajavrukshagroup.in/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          lastName: formData.lastname,
          email: formData.email,
          subject: formData.subject,
          message: formData.notes,
          phone_no: formData.phone_no,
        }),
      });

      if (response.ok) {
        SuccessMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          notes: "",
          phone_no: "",
        });
        setError({
          name: "",
          email: "",
          subject: "",
          lastname: "",
          notes: "",
          phone_no: "",
        });
      } else {
        ErrorMessage("There was an error sending the message.");
      }
    } catch (err) {
      console.error("Error:", err);
      ErrorMessage("There was a problem with the server.");
    }
  };
  
  return (
    <form onSubmit={submitHandler} className="form-new">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="form-new-field">
            <input
              value={formData.name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Name"
              />
            <p>{error.name}</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="form-new-field">
            <input
              value={formData.lastname}
              onChange={changeHandler}
              type="text"
              name="lastname"
              placeholder="Lastname"
              />
            <p>{error.lastname}</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="form-new-field">
            <input
              value={formData.email}
              onChange={changeHandler}
              type="email"
              name="email"
              placeholder="Email"
              />
            <p>{error.email}</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="form-new-field">
            <input
              value={formData.phone_no}
              onChange={changeHandler}
              type="number"
              name="phone_no"
              placeholder="Phone No"
              />
            <p>{error.phone_no}</p>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-new-field">
            <input
              value={formData.subject}
              onChange={changeHandler}
              type="text"
              name="subject"
              placeholder="Subject"
              />
            <p>{error.subject}</p>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-new-field">
            <textarea
              value={formData.notes}
              onChange={changeHandler}
              name="notes"
              placeholder="Notes"
              rows="4"
              />
            <p>{error.notes}</p>
          </div>
        </div>
        <div className="contact-form-new-action">
              <button  className="form-new-button" type="submit">
                Send Message
              </button>
            </div>
      </div>
    </form>
  );
};

export default FormContact;

