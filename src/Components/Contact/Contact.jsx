import React, { useState } from "react";
import { db } from "../../firebase/firebase.config";  
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import "./Contact.css"; 

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
 
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        phone,
        message,
        timestamp: serverTimestamp(),
      });

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      alert("Error sending message: " + error.message);
    }

    setSending(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form" id="contact">
        <div className="form-field">
          <label>Your Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name" />
        </div>
        <div className="form-field">
          <label>Your Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
        </div>
        <div className="form-field">
          <label>Your Phone Number</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Enter your phone number" />
        </div>
        <div className="form-field">
          <label>Your Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Enter your message here" rows="4" />
        </div>
        <button type="submit" className="submit-button">
          {sending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
