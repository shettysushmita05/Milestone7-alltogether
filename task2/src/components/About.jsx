import React from 'react';
import "../App.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">Welcome to Our World</h1>
        <p className="about-subtitle">
          A place where creativity meets technology. Discover our journey and the passion that drives us.
        </p>
        <button className="cta-button">Explore More</button>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            To empower individuals and organizations by providing innovative and impactful solutions that make a difference.
          </p>
        </div>
        <div className="about-card">
          <h2 className="card-title">Our Vision</h2>
          <p className="card-text">
            To be a global leader in technology and innovation, creating a sustainable future for generations to come.
          </p>
        </div>
        <div className="about-card">
          <h2 className="card-title">Our Values</h2>
          <p className="card-text">
            Integrity, creativity, and collaboration are at the heart of everything we do.
          </p>
        </div>
      </section>

      <section className="about-team">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQEiE38EeXkI5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679801792954?e=2147483647&v=beta&t=LsUiTDe7TCiH8qFp5_1nKTYIwUvtN-0pvHBmVOZ1Cdo" alt="Team Member" className="member-photo" />
            <h3 className="member-name">Ashu Kajekar</h3>
            <p className="member-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQFLNI4ExDNN2A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682577040391?e=2147483647&v=beta&t=Gb0vmF1KjvzcqWj4SeCkVWQFZPN8CNgWM5nvv7HmYZE" alt="Team Member" className="member-photo" />
            <h3 className="member-name">Aishwarya</h3>
            <p className="member-role">Manager Frontend</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="member-photo" />
            <h3 className="member-name">Sushmita Shetty</h3>
            <p className="member-role">SDE frontend trainee</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>© 2025 Our Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
