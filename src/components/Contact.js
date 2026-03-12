
// Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">

        <h1 className="sub-title">Contact Me</h1>

        <div className="contact-row">

          {/* Left Side */}
          <div className="contact-left">

            <p>📧 davidpeter487@gmail.com</p>
            <p>📞 +254 711 278 380</p>

            <div className="social-icons">
              <a href="https://github.com/PeterDavid3800">GitHub</a>
              <a href="https://linkedin.com/in/peter-david-aringo">LinkedIn</a>
            </div>

            <a
              href="/images/PeterDavidAringoCV.pdf"
              download
              className="btn"
            >
              Download CV
            </a>

          </div>

          {/* Right Side Form */}
          <div className="contact-right">

            <form>

              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button type="submit" className="btn">
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;