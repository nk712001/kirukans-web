import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "../CommonButton";

export default function Hero() {
  const btnStyle = {
    borderRadius: 0,
    fontFamily: "Montserrat",
    fontSize: "20px",
    color: "#FFBF17",
    fontWeight: "700",
    border: "1px solid #FFBF17",
    textTransform: "capitalize",
    padding: "10px 24px",
    marginTop: "15px",
    "&:hover": {
      color: "#1A1547",
      border: "1px solid #FFBF17",
      backgroundColor: "#FFBF17",
    },
  };
  return (
    <>
      <div className="hero-section">
        <Typography variant="h1" className="hero-text">
          Madness In Doing Goodness
        </Typography>
      </div>
      <Grid container maxWidth={2700} className="hero-bg" spacing={4}>
        <Grid item lg={6}>
          <div className="hero-grid">
            <Image
              width={560}
              height={350}
              alt=""
              style={{ objectFit: "contain" }}
              src={"/heroImg.png"}
            />
          </div>
        </Grid>
        <Grid item lg={6}>
          <div className="hero-grid hero-desc">
            <Typography>Up coming event</Typography>
            <Typography variant="h3">
              Kirukans Mural Painting <br />
              <span>22 Oct 2023 | Trichy</span>
            </Typography>
            <Typography className="desc-para">
              At Raja government school, we believe in the power of creativity
              and education. We're thrilled to announce our latest project - a
              stunning mural that will inspire and uplift our students for years
              to come.
            </Typography>
            <Grid
              container
              justifyContent="flex-start"
              alignItems="center"
              columnSpacing={2}
            >
              <Grid item>
                <CustomButton sxProp={btnStyle} label={"Donate Us"} />
              </Grid>
              <Grid item>
                <CustomButton sxProp={btnStyle} label={"Join Us"} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
