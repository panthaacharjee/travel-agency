import { Grid } from "@mui/material";
import React from "react";

import Greece from "../../asstes/Greece.jpg";
import London from "../../asstes/London.jpg";
import Europe from "../../asstes/Europe.jpg";

import { CiLocationArrow1 } from "react-icons/ci";

const Destination = () => {
  return (
    <div className="destination-section">
      <p>Top Selling</p>
      <h2>Top Destinations</h2>
      <Grid container className="destination-section-container">
        <Grid item md={4}>
          <div className="destination-section-box">
            <img src={Greece} alt="Greece Photo" />
            <div>
              <p className="destination-name">Athens, Greece</p>
              <p>$ 5.4k</p>
            </div>
            <p>
              <span>
                <CiLocationArrow1 />
              </span>
              10 Days Trip
            </p>
          </div>
        </Grid>
        <Grid item md={4}>
          <div className="destination-section-box">
            <img src={London} alt="Greece Photo" />
            <div>
              <p className="destination-name">London, UK</p>
              <p>$ 4.2k</p>
            </div>
            <p>
              <span>
                <CiLocationArrow1 />
              </span>
              10 Days Trip
            </p>
          </div>
        </Grid>
        <Grid item md={4}>
          <div className="destination-section-box">
            <img src={Europe} alt="Greece Photo" />
            <div>
              <p className="destination-name">Full Europe</p>
              <p>$ 15k</p>
            </div>
            <p>
              <span>
                <CiLocationArrow1 />
              </span>
              10 Days Trip
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Destination;
