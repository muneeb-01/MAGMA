import React from "react";
import "./LandingPage.css";
import { IoMdMenu } from "react-icons/io";
const LandingPage = () => {
  return (
    <div id="page1">
      <div className="nav">
        <img
          id="Logo"
          src="/Magma-main/Screenshot 2023-05-30 220719.png"
          alt=""
        />
        <div className="nav-btn">
          <button>Book a Demo</button>
          <button>
            <IoMdMenu size={20} />
          </button>
        </div>
      </div>
      <div className="bottom-page1">
        <h1>
          Experience Real <br />
          Estate Agility
        </h1>
        <div className="bottom-page1-inner">
          <h4>
            Create a digital twin of your existing building <br />
            and release the potential of Web3.
          </h4>
          <button>LEARN MORE</button>
        </div>
      </div>
      <video
        src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default LandingPage;
