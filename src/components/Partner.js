import { Grid } from "@mui/material";
import React from "react";
import axon from "../asstes/Partner/axon.png";
import expedia from "../asstes/Partner/expedia.png";
import hkexpress from "../asstes/Partner/hkexpress.png";
import jetstar from "../asstes/Partner/jetstar.png";
import malaysia from "../asstes/Partner/malaysia.png";

const Partner = () => {
  return (
    <div className="partner-section">
      <Grid container alignItems={"center"} justifyContent={"space-around"}>
        <Grid item md={2}>
          <img src={axon} />
        </Grid>
        <Grid item md={2}>
          <img src={expedia} />
        </Grid>

        <Grid item md={2}>
          <img src={hkexpress} />
        </Grid>
        <Grid item md={2}>
          <img src={jetstar} />
        </Grid>
        <Grid item md={2}>
          <img src={malaysia} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Partner;
