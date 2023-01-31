import { Grid } from "@mui/material";
import React from "react";

import aroplane from "../../asstes/svg-icon/aroplane.png";
import microphone from "../../asstes/svg-icon/microphone.png";
import satelite from "../../asstes/svg-icon/satelite.png";
import settings from "../../asstes/svg-icon/settings.png";
import aroplaneBg from "../../asstes/aroplane-bg.png";

const Service = () => {
  return (
    <div className="service-section">
      <div className="for-background"></div>
      <p>Category</p>
      <h2>We Offer Best Services</h2>
      <Grid container className="service-section-container">
        <Grid item md={3}>
          <div className="service-section-box">
            <img src={satelite} />
            <h4>Calculated Weather</h4>
            <p>
              Built Wicket longer admire
              <br /> do barton vanity <br />
              itself do in it.
            </p>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="service-section-box">
            <img src={aroplane} />
            <h4>Best Fligts</h4>
            <p>
              Built Wicket longer admire
              <br /> do barton vanity <br />
              itself do in it.
            </p>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="service-section-box">
            <img src={microphone} />
            <h4>Local Events</h4>
            <p>
              Built Wicket longer admire
              <br /> do barton vanity <br />
              itself do in it.
            </p>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="service-section-box">
            <img src={settings} />
            <h4>Customization</h4>
            <p>
              Built Wicket longer admire
              <br /> do barton vanity <br />
              itself do in it.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
