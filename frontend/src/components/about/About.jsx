import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
          Greetings, I'm Abhirama, a computer science student at PESU, deeply
          involved in a significant project—a comprehensive to-do/notes website
          designed to simplify and enhance daily productivity. Leveraging a
          robust tech stack, we employ HTML for structural integrity, CSS for a
          visually pleasing interface, React for dynamic and responsive user
          experiences, and Node.js with Express for a robust backend. Our data
          management is handled seamlessly with MongoDB, ensuring security and
          efficiency. <br /> <br />
          Collaborating with my talented peers, Aathil and Ajaybir, at PESU,
          we're committed to delivering an intuitive and user-friendly solution.
          This project not only demonstrates our technical prowess but also
          reflects our dedication to creating impactful and streamlined
          applications.
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
