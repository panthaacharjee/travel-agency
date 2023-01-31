import React from "react";

import { GiPickOfDestiny } from "react-icons/gi";
import { MdPayment, MdBookmarks } from "react-icons/md";
import { FaFlagCheckered, FaTelegramPlane } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { BsBuilding } from "react-icons/bs";

import Newyork from "../../asstes/Newyork.jpg";

const Trip = () => {
  return (
    <div className="trip-section">
      <div className="trip-section-box">
        <p>Easy and Fast</p>
        <h2>
          Book your next trip
          <br />
          in 3 easy steps
        </h2>

        <div className="trip-section-content">
          <div>
            <GiPickOfDestiny />
          </div>
          <p>
            Choose Destination
            <br />
            <label>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              <br />
              quisquam possimus maiores non
            </label>
          </p>
        </div>
        <div className="trip-section-content">
          <div>
            <MdPayment />
          </div>
          <p>
            Make Payment
            <br />
            <label>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              <br />
              quisquam possimus maiores non
            </label>
          </p>
        </div>
        <div className="trip-section-content">
          <div>
            <FaFlagCheckered />
          </div>
          <p>
            Reach Airport on Selected date
            <br />
            <label>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              <br />
              quisquam possimus maiores non
            </label>
          </p>
        </div>
      </div>
      <div className="trip-choose">
        <img src={Newyork} />
        <h4>Trip To New York</h4>
        <p>14-23 June | by Pantha Acharjee</p>
        <div>
          <p>
            <GrAppleAppStore />
          </p>
          <p>
            <MdBookmarks />
          </p>
          <p>
            <FaTelegramPlane />
          </p>
        </div>
        <div>
          <span>
            <BsBuilding />
          </span>
          24 people going
        </div>
      </div>
    </div>
  );
};

export default Trip;
