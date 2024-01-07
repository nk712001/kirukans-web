"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const CustomButton = dynamic(() => import("../CommonButton"));
import styles from "./hero.module.css";

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
      <Container disableGutters maxWidth={false}>
        <div className={`${styles["hero-section"]}`}>
          <Typography variant="h1" className={`${styles["hero-text"]}`}>
            Madness In Doing Goodness
          </Typography>
        </div>
        <Grid
          container
          maxWidth={2700}
          className={`${styles["hero-bg"]}`}
          // columnGap={1}
        >
          <Grid item lg={6}>
            <div>
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
            <div className={`${styles["hero-desc"]}`}>
              <Typography>Up coming event</Typography>
              <Typography variant="h3">
                Kirukans Mural Painting <br />
                <span>22 Oct 2023 | Trichy</span>
              </Typography>
              <Typography variant="span" className={`${styles["desc-para"]}`}>
                At Raja government school, we believe in the power of creativity
                and education. We&apos;re thrilled to announce our latest
                project - a stunning mural that will inspire and uplift our
                students for years to come.
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
      </Container>
    </>
  );
}
