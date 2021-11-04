import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactUs.css";

const ContactUs = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const ShowContactUsForm = () => {
    setIsMessageSent(false)
    setClientName('')
    setClientEmail('')
    setClientMessage('')
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kh47bep",
        "template_rztnexa",
        e.target,
        "user_HS7JdFxlVNng9yo2PCzKq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true)
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <div className="form-group--contact-us">
      <div className="form-group--contact-us__content">
        {isMessageSent ? (
          <div>
            Thank you for your interest. We will contact you as soon as possible. <span onClick={ShowContactUsForm}>Let Us know</span> if you have any other questions.
          </div>
        ) : (
          <form onSubmit={sendEmail}>
            <div className="input-group">
              <label>Name:</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                placeholder="Name..."
                onChange={(e) => {
                  setClientName(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email..."
                onChange={(e) => {
                  setClientEmail(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group">
              <label>Message:</label>
              <textarea
                name="message"
                required
                onChange={(e) => {
                  setClientMessage(e.currentTarget.value);
                }}
              />
            </div>
            <input
              disabled={
                clientName.length === 0 ||
                clientEmail.length === 0 ||
                clientMessage.length === 0
              }
              type="submit"
              value="Send"
            />
          </form>
        )}
      </div>
    </div>
  );
};
export default ContactUs;
