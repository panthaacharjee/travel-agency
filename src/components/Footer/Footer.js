import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
import footer from "../../asstes/Partner/footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid item md={3} sm={2}>
          <div className="footer-box">
            <h4>Company</h4>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Cares</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
          </div>
        </Grid>
        <Grid item md={3} sm={2}>
          <div className="footer-box">
            <h4>Contact</h4>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Affilates</a>
            </li>
          </div>
        </Grid>
        <Grid item md={3} sm={2}>
          <div className="footer-box">
            <h4>More</h4>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Cares</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
          </div>
        </Grid>
        <Grid item md={3} sm={2}>
          <div className="footer-box">
            <h4>Discovered Our App</h4>
            <img src={footer} />
          </div>
        </Grid>
      </Grid>
      <div className="copyright">
        <p>All rights reserved@travel.co</p>
      </div>
    </div>
  );
};

export default Footer;
