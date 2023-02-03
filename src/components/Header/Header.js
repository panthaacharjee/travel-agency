import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import womenSvg from "../../asstes/header-svg.svg";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  return (
    <div className="header-section">
      <div className="navbar">
        <div className="logo">
          <h2>
            Trav<span>el</span>
          </h2>
        </div>
        <div className="nav-menu">
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Flights</a>
          </li>
          <li>
            <a href="#">Bookings</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </div>
        <div className="mobile-menu">
          <GoThreeBars />
        </div>
      </div>
      <div className="heading">
        <div className="heading-box">
          <h2>Best Destinations in the world</h2>
          <div className="heading-text">
            Travel, enjoy
            <br /> and live a new
            <br /> and full life
          </div>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listenning. Park gate sell they
            west hard
            <br /> for the.
          </p>
          <div className="heading-button">
            <button>Find out more</button>
            <div>
              <span>
                <BsFillPlayCircleFill />
              </span>
              <p>Play Demo</p>
            </div>
          </div>
        </div>
        <div className="svg-box">
          <img src={womenSvg} alt="travel-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
