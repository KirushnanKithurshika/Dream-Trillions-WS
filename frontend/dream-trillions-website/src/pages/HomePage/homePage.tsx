import React from "react";
import "./homePage.css";
import HomeBG from "../../assets/HomeBG.png"; // adjust path if needed

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-bg-wrapper">
        <img src={HomeBG} alt="Home Background" className="home-bg-image" />
      </div>
    </div>
  );
};

export default Home;
