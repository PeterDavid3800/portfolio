import React, { useState } from "react";

const About = () => {

  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="about-section">

      <div className="container">

        <div className="about-grid">

          {/* Profile Image */}
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + "/images/user.png"} alt="Peter David Aringo" />
          </div>


          {/* About Content */}
          <div className="about-content">

            <h1 className="section-title">About Me</h1>

            <p className="about-text">
              I’m <strong>Peter David Aringo</strong>, a graduate of Strathmore
              University with a Bachelor of Business Information Technology (BBIT).
              I specialize in building modern, scalable web applications using
              <strong> Laravel and React.js</strong>. My experience spans business
              intelligence, digital marketing, and full-stack development, with a
              strong interest in artificial intelligence. Outside of tech I enjoy
              <strong> CrossFit, rugby, and connecting with creators</strong>.
            </p><br />


            {/* Tabs */}
            <div className="about-tabs">

              <button
                className={activeTab === "skills" ? "tab active" : "tab"}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>

              <button
                className={activeTab === "experience" ? "tab active" : "tab"}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>

              <button
                className={activeTab === "education" ? "tab active" : "tab"}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>

            </div>


            {/* Skills */}
            {activeTab === "skills" && (
              <div className="skills-grid">

                <div className="skill-card">
                  <h3>UI / UX</h3>
                  <p>Designing intuitive web interfaces</p>
                </div>

                <div className="skill-card">
                  <h3>Web Development</h3>
                  <p>Laravel & React full-stack apps</p>
                </div>

                <div className="skill-card">
                  <h3>Networking</h3>
                  <p>Network device configuration</p>
                </div>

              </div>
            )}


            {/* Experience */}
            {activeTab === "experience" && (
              <ul className="timeline">

                <li>
                  <span>2025</span>
                  Digital Media Coordinator – Genesis Marketing Solutions
                </li>

                <li>
                  <span>2024</span>
                  Intern – Strathmore Office of Graduate Studies
                </li>

                <li>
                  <span>2023</span>
                  Web Technologies Trainee – Huawei Technologies Kenya
                </li>

                <li>
                  <span>2021</span>
                  Administrative Intern – National Hospital Insurance Fund
                </li>

                <li>
                  <span>2023 – Present</span>
                  Freelance Full-Stack Developer (Laravel & React)
                </li>

              </ul>
            )}


            {/* Education */}
            {activeTab === "education" && (
              <ul className="timeline">

                <li>
                  <span>2024</span>
                  Bachelor of Business Information Technology – Strathmore University
                </li>

                <li>
                  <span>2019</span>
                  Nova Pioneer High School
                </li>

              </ul>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;