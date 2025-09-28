import React, { useEffect, useState, useRef } from "react";
import Loader from "../Loader/loader";
import "./jobCareer.css";
import ReCAPTCHA from "react-google-recaptcha";
import { ErrorMessage,SuccessMessage } from "../../utils/toastify";

const BdeInternCareer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    file: null,
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["application/pdf"]; // PDF
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setErrors({ file: "Only PDF is allowed." });
      } else if (file.size > maxSize) {
        setErrors({ file: "File size must not exceed 5MB." });
      } else {
        setErrors({ file: "" });
        setFormData({ ...formData, file });
      }
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Only 10 digits
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) formErrors.name = "Enter the name";
    if (!formData.email) {
      formErrors.email = "Enter your email address";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!formData.contact_no) {
      formErrors.contact_no = "Enter your phone number.";
    } else if (!validatePhoneNumber(formData.contact_no)) {
      formErrors.contact_no = "Phone number must be 10 digits.";
    }
    if (!formData.file) formErrors.file = "Please upload a file.";
    setErrors(formErrors);
    if (!captchaVerified) {
      Error("Please complete the reCAPTCHA.");
      return;
    }
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("name", formData.name);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("contact_no", formData.contact_no);
        formDataToSubmit.append("file", formData.file);

        //"https://rajavruksha-server.vercel.app/careerForm"
        //http://localhost:3000/careerForm
        const response = await fetch(
          // "https://servermain.rajavrukshagroup.in/careerForm",
          "https://rajavruksha-server.rajavrukshagroup.in/careerForm",
          {
            method: "POST",
            body: formDataToSubmit,
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Form submitted successfully", data);
          SuccessMessage("Form Submitted Successfully");
          setFormData({
            name: "",
            email: "",
            contact_no: "",
            file: null,
          });
          fileInputRef.current.value = null;
        } else {
          console.error("Form submission failed", response.statusText);
          ErrorMessage("form submission failed.Please try again.");
        }
      } catch (error) {
        console.error("An error occurred during form submission", error);
        ErrorMessage("An error occurred.Please try again.");
        setFormData({
          name: "",
          email: "",
          contact_no: "",
          file: null,
        });
        fileInputRef.current.value = null;
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="containers">
      {isLoading && <Loader logo={false} />}
      <div className="job-description" data-aos="fade-right">
        <h2>BUSINESS DEVELOPMENT EXECUTIVE INTERN</h2>
        <h4>Intern Program Details</h4>
        <p>
          The internship program For Business Development Executive is set for a
          period of 3 months where in the interns will be trained in the below
          mentioned aspects.
        </p>
        <ul className="list-methods">
          <li>Client communication.</li>
          <li>Negotiation skills.</li>
          <li>Sales Techniques and Strategies.</li>
          <li>Product/Service Knowledge.</li>
          <li>Market Research and Industry Analysis.</li>
          <li>Relationship Building and Networking.</li>
          <li>Adaptability and Agility.</li>
          <li>Ethical Marketing Practices.</li>
          <li>Communication and Presentation Skills.</li>
          <li>Time Management and Organization.</li>
          <li>Handling Rejections and Resilience.</li>
        </ul>
        <p>
          During the internship program the interns will be provided a stipend
          amount of Rs.5,000/- to Rs.8,000/- monthly. Post the internship
          program the interns will be offered employment based on the assessment
          at the end of internship program.{" "}
        </p>
        <h4>Qualifications</h4>
        <p>BBA, BBM, B.COM, MBA</p>
        <h4>Requirements</h4>
        <p>Good communication and interpersonal skills.</p>
        <p>Passionate in learning new concepts</p>
        <p>Willing to research new marketing trends.</p>
        <h4>Age</h4>
        <p>19-25 years</p>
        <h4>Timings</h4>
        <p>9.30 am to 6.30 pm</p>
        <h4>
          Job Category:<p>Business Development Executive Intern</p>
        </h4>
        <h4>
          Job Type:<p>Internship </p>{" "}
        </h4>
        <h4>
          Internship Location:<p>Bangalore</p>{" "}
        </h4>
      </div>
      <form
        className="career-form"
        data-aos="fade-left"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        <h2>Career Form</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contact_no"
            placeholder="Phone no"
            value={formData.contact_no}
            onChange={handleChange}
          />
          {errors.contact_no && (
            <span className="error">{errors.contact_no}</span>
          )}
        </div>
        <div className="form" style={{ marginLeft: "1rem" }}>
          <div style={{ display: "block", marginBottom: "0.5rem" }}>
            Upload CV *
          </div>
          <label
            htmlFor="file"
            className="choose-file"
            style={{ cursor: "pointer" }}
          >
            Choose File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf"
            className="input-bde"
            style={{
              display: "none", 
            }}
          />
          <div
            style={{
              display: "inline-block", 
              marginLeft: "0.5rem", 
              fontSize: "0.8rem",
              color: "#333",
            }}
          >
            {formData.file ? (
              <>
                <strong>File selected: </strong>
                {formData.file.name}
              </>
            ) : (
              "No file chosen"
            )}
          </div>
          <p style={{ fontSize: "0.6rem", color: "red", marginTop: "0.5rem" }}>
            * Please upload a file with the following format:{" "}
            <strong>.pdf</strong>. The file size should not exceed{" "}
            <strong>5MB</strong>.
          </p>
          {errors.file && (
            <span
              className="error"
              style={{
                display: "block",
                color: "red",
                marginTop: "0.5rem",
              }}
            >
              {errors.file}
            </span>
          )}
        </div>

        <div className="form-group" style={{ marginLeft: "1rem" }}>
          <ReCAPTCHA
            sitekey="6Lf165EqAAAAAGMB2fjKkFOvkFPTXrgoOoa4lXs9"
            onChange={handleCaptcha}
          />
          <label htmlFor="consent">
            I hereby authorize Rajavruksha Realtors Pvt Ltd to contact me via
            phone and email regarding my enquiry. I understand that this
            communication may include follow-up calls, emails, and other
            messages to assist with my enquiry and provide further information
            about your services. This will override the registry on DND/NDNC.
          </label>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default BdeInternCareer;
