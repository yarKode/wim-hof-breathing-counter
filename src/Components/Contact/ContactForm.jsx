import React from "react";

export default function ContactForm({
  formData,
  valueChangeHandler,
  submitHandler,
}) {
  return (
    <div className="form-placeholder">
      {formData.err && (
        <p
          style={{
            color: "red",
            fontSize: "1rem",
            textAlign: "center",
            letterSpacing: "normal",
          }}
        >
          {`${formData.err}`}
        </p>
      )}
      <form className="contact-form">
        <ul className="contact-form-list">
          <li>
            <label htmlFor="name">Name:</label>
            <input
              autoComplete="off"
              onChange={valueChangeHandler}
              value={formData.name}
              type="text"
              id="name"
              name="user_name"
            />
          </li>
          <li>
            <label htmlFor="mail">E-mail:</label>
            <input
              autoComplete="off"
              onChange={valueChangeHandler}
              value={formData.email}
              type="email"
              id="mail"
              name="user_mail"
              required
            />
          </li>
          <li>
            <label htmlFor="msg">Message:</label>
            <textarea
              onChange={valueChangeHandler}
              value={formData.msg}
              id="msg"
              name="user_message"
              cols="2"
              rows="6"
              required
            ></textarea>
          </li>
          <li>
            <button onClick={submitHandler} className="link-btn" type="submit">
              Send your message
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
