"use client";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./JoinUs.module.css";
import Forms from "../InputController";

export default function JoinUs() {
  return (
    <>
      <Container
        sx={{
          margin: "150px auto",
        }}
      >
        <div className={`${styles["join-container"]}`}>
          <Grid container spacing={5}>
            <Grid item lg={5}>
              <div>
                <Forms />
              </div>
            </Grid>
            <Grid item lg={7}>
              <div className={`${styles["join-banner"]}`}>
                <Image src={"./join-banner.svg"} fill alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
