// Services.js
import React from 'react';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1>My Services</h1>
        <div className="services-list">
          <div>
            <i className="fas fa-code"></i>
            <h2>Full-Stack Web Development</h2>
            <p>
              Building scalable web applications using Laravel for backend and React.js for interactive frontend experiences.
            </p>
          </div>
          <div>
            <i className="fas fa-database"></i>
            <h2>Database Design & Management</h2>
            <p>
              Designing and managing efficient, secure databases to support dynamic business applications.
            </p>
          </div>
          <div>
            <i className="fas fa-network-wired"></i>
            <h2>Network Device Configuration & Support</h2>
            <p>
              Configuring network devices and ensuring secure, reliable connectivity for organizations.
            </p>
          </div>
          <div>
            <i className="fas fa-mobile-alt"></i>
            <h2>Responsive UI/UX Design</h2>
            <p>
              Crafting user-friendly interfaces with React.js that work flawlessly across all devices.
            </p>
          </div>
          <div>
            <i className="fas fa-cloud"></i>
            <h2>API Development & Integration</h2>
            <p>
              Developing RESTful APIs with Laravel and integrating third-party services for seamless functionality.
            </p>
          </div>
          <div>
            <i className="fas fa-shield-alt"></i>
            <h2>Application Security</h2>
            <p>
              Implementing security best practices to protect applications against common vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
