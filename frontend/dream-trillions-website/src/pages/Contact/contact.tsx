import React, { useState } from "react";
import "./contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    alert("Your message has been sent successfully!");

    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-head">
          <p className="contact-badge">Get In Touch</p>
          <h1>Let’s Build Something Great Together</h1>
          <p className="contact-intro">
            Have a project idea, business requirement, or need backend support?
            Reach out to Dream Trillions and let’s discuss how we can help your
            business grow with reliable digital solutions.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-left">
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-right">
            <div className="contact-info-box">
              <h3>Why Contact Us?</h3>
              <p>
                We provide smart digital solutions, backend support, cloud
                services, and renewable energy related innovations tailored for
                modern businesses.
              </p>
            </div>

            <div className="contact-info-box">
              <h3>Our Support</h3>
              <p>
                Whether you need technical support, software development, or
                project consultation, our team is ready to assist you.
              </p>
            </div>

            <div className="contact-info-box">
              <h3>Business Inquiries</h3>
              <p>
                Contact us for partnerships, backend service outsourcing,
                digital transformation projects, and scalable business
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;