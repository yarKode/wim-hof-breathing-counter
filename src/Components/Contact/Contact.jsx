import React, { useState } from "react";
import Heading from "../Heading";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

import { send } from "emailjs-com";

import isEmailMaybe from "is-email-maybe";
import Spinner from "../Spinner";

export default function Contact() {
  const [formData, setFormData] = useState(() => ({
    name: "Slavik",
    email: "slavik.buravik@gmail..ccom",
    msg: "",
    err: "",
  }));

  const [formStatus, setFormStatus] = useState(() => "idle");

  function valueChangeHandler({ target: { name, value } }) {
    setFormData((prev) => ({
      ...prev,
      err: "",
    }));
    if (name === "user_name") setFormData((prev) => ({ ...prev, name: value }));
    if (name === "user_mail")
      setFormData((prev) => ({ ...prev, email: value }));
    if (name === "user_message")
      setFormData((prev) => ({ ...prev, msg: value }));
  }

  function submitHandler(e) {
    if (!e) return;
    e.preventDefault();
    if (formData.email.trim() === "" || formData.msg.trim() === "") {
      setFormData((prev) => ({
        ...prev,
        err: "Email and Message Fields can't be empty",
      }));
      return;
    }

    if (!isEmailMaybe(formData.email.trim())) {
      setFormData((prev) => ({
        ...prev,
        err: "Email is not valid",
      }));
      return;
    }

    const toSend = {
      from_name: formData.name,
      to_name: "to_name",
      message: formData.msg,
      reply_to: formData.email,
    };

    setFormStatus("proccessing");
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        setFormStatus("succes");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setFormStatus("failed");
      });

    setFormData((prev) => ({
      ...prev,
      name: "",
      email: "",
      msg: "",
      err: "",
    }));
  }

  if (formStatus === "succes") {
    return (
      <div className="page-container">
        <h1>Email sent successfully!</h1>
      </div>
    );
  }

  if (formStatus === "proccessing") {
    return (
      <div className="page-container">
        <h1>Sending...</h1>
        <Spinner />
      </div>
    );
  }
  if (formStatus === "failed") {
    return (
      <div className="page-container">
        <h1>Sending failed 😿</h1>
      </div>
    );
  }
  if (formStatus === "idle")
    return (
      <div className="page-container">
        <Heading title="Contact Me" />
        <div className="contact-block">
          <ContactForm
            formData={formData}
            valueChangeHandler={valueChangeHandler}
            submitHandler={submitHandler}
          />
          <div className="vertical-spread-line"></div>
          <ContactList />
        </div>
      </div>
    );
}
