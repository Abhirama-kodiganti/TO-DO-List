import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
          Organise your <br /> work and life,
        </h1>
        <p className="text-center">
          Become focused with Polaris <br />
          reach for the stars
        </p>

        {isLoggedIn && <button className="home-btn p-2">Make a list</button>}
      </div>
    </div>
  );
};

export default Home;
