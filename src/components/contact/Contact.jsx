import React, { useState, useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5t58gr4', 'template_amlgstq', form.current, '1IFcTNiVxoewt64c1')
      .then(
        () => {
          setSuccess(true);
          console.log('SUCCESS!');
          form.current.reset(); 
          setTimeout(() => setSuccess(false), 5000); 
        },
        (error) => {
          setError(true);
          console.error('FAILED...', error);
          setTimeout(() => setError(false), 5000); 
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__details">Don't like forms? Send me an email</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="hidden" name="to_name" value= 'Chandan'/>

          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                name="from_name" 
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="from_email" 
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              name="subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
          {success && <p className="success-message">Message sent successfully!</p>}
          {error && <p className="error-message">Failed to send the message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
