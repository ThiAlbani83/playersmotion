import React, { useRef, useState } from "react";
import Titles from "./Titles";
import emailjs from "@emailjs/browser";
import.meta.env.VITE_APP_API_KEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [formSucceeded, setFormSucceeded] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let isUsernameValid = validateUsername(name);
    let isCompanyValid = validateCompany(company);
    let isEmailValid = validateEmail(email);

    if (isUsernameValid && isCompanyValid && isEmailValid) {
      emailjs
        .sendForm(
          "service_n5y9ai2",
          "template_mx4loq1",
          form.current,
          import.meta.env.VITE_APP_API_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormSucceeded(true);
    }
  };

  //function to validade userName
  function validateUsername(name) {
    let isUserNameValid = true;
    const nameRegex = /^[a-zA-Z0-9]+$/;
    setNameError("");
    if (!nameRegex.test(name)) {
      setNameError("Username cannot contain special characters or be blank");
      isUserNameValid = false;
      return isUserNameValid;
    }
    if (name === "") {
      setNameError("Username cannot be blank");
      isUserNameValid = false;
      return isUserNameValid;
    }
    return isUserNameValid;
  }

  //function to validade email
  function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    let isEmailValid = true;
    setEmailError("");
    if (!emailRegex.test(email)) {
      setEmailError("The e-mail address is invalid");
      isEmailValid = false;
      return isEmailValid;
    }
    if (email === "") {
      setEmailError("Email cannot be blank");
      isEmailValid = false;
      return isEmailValid;
    }
    return isEmailValid;
  }

  //function to validade company
  function validateCompany(company) {
    let isCompanyValid = true;
    setCompanyError("");
    if (company === "") {
      setCompanyError("Company cannot be blank");
      isCompanyValid = false;
      return isCompanyValid;
    }
    return isCompanyValid;
  }

  return (
    <div className="w-full bg-gray-900 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px] font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
      <Titles title="Contact Us" textColor="text-slate-100" />
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-3 text-sm max-w-[600px]"
          noValidate
        >
          <div className="relative flex w-full">
            <div className="w-full">
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Name"
                className="form_input"
                onChange={(event) => setName(event.target.value)}
              />
              {nameError && (
                <span className="text-xs text-red-500">{nameError}</span>
              )}
            </div>
            <span className="absolute top-0 text-2xl text-red-500 right-2">
              *
            </span>
          </div>

          <div className="relative flex w-full">
            <div className="w-full">
              <input
                type="company"
                name="user_company"
                id="user_company"
                placeholder="Company"
                className="form_input"
                onChange={(event) => setCompany(event.target.value)}
              />
              {companyError && (
                <span className="text-xs text-red-500">{companyError}</span>
              )}
            </div>
            <span className="absolute top-0 text-2xl text-red-500 right-2">
              *
            </span>
          </div>
          <div className="relative flex w-full">
            <div className="w-full">
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="E-mail"
                className="form_input"
                onChange={(event) => setEmail(event.target.value)}
              />
              {emailError && (
                <span className="text-xs text-red-500">{emailError}</span>
              )}
            </div>
            <span className="absolute top-0 text-2xl text-red-500 right-2">
              *
            </span>
          </div>
          <input
            type="phone"
            name="user_phone"
            id="user_phone"
            placeholder="Phone"
            className="form_input"
          />
          <input
            type="skype"
            name="user_skype"
            id="user_skype"
            placeholder="Skype"
            className="form_input"
          />
          <textarea
            name="message"
            id="message"
            rows={10}
            placeholder="Type your message..."
            className="w-full px-3 py-2 text-gray-900 rounded-md bg-slate-100"
          />
          <div className="flex items-start justify-between w-full">
            <span className="flex items-start gap-1 text-2xl text-red-400">
              * <span className="text-sm text-slate-100">Required</span>
            </span>
            <input
              type="submit"
              value="Send"
              className="px-10 py-2 bg-red-400 rounded-lg text-slate-100"
            />
          </div>
          {formSucceeded && (
            <span className="text-xs text-green-500">
              Thank you for your message. We'll return the contact soon!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
