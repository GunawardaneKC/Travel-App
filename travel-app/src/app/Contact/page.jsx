'use client'
import React, { useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import Image from 'next/image';
import './contactstyle.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://apptravel-1.onrender.com/send-email', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert(response.data.message);
    } catch (error) {
      alert('Something went wrong. Try again later');
    }
  };

  return (
    <div>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>Contact Us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span><i className="fas fa-mobile-alt"></i></span>
              <span>Phone No.</span>
              <span className="text">+94 75 626 8043</span>
            </div>
            <div>
              <span><i className="fas fa-envelope-open"></i></span>
              <span>E-mail</span>
              <span className="text">alexdunntours@gmail.com</span>
            </div>
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>Address</span>
              <span className="text">No. 410/A/1, Kirillawala, Kadawatha.</span>
            </div>
            <div>
              <span><i className="fas fa-clock"></i></span>
              <span>Opening Hours</span>
              <span className="text">Monday - Sunday (24 hours)</span>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input
                type="submit"
                className="send-btn"
                value="Send Message"
              />
            </form>

            <div>
              <Image width={600} height={600} style={{ display: 'inline' }} src="https://res.cloudinary.com/dj1uyme6s/image/upload/v1718741232/DSC_0011_copy_j4ncra.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.9685410911532!2d79.97558636955304!3d7.024074399561112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f95b202aad53%3A0x9cd8c70fe0093e31!2sAlex%20Dunn%20Tours!5e0!3m2!1sen!2slk!4v1710862763030!5m2!1sen!2slk"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        <div className="contact-footer">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61550251387026&mibextid=ZbWKwL" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="https://www.instagram.com/alexdunntours?utm_source=qr&igsh=MWNqZHk5NnU4bXZ6cg==" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-youtube"></a>
          </div>
        </div>
      </section>
    </div>
  );
}
