import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./ourInitiative.module.css";
import Image from "next/image";
import Link from "next/link";
export default function OurInitiative() {
  return (
    <>
      <Container>
        <div className="our-section">
          <Typography variant="h1">Our Initiatives</Typography>
        </div>
        <Grid
          container
          className={`${styles["our-container"]}`}
          justifyContent={"flex-start"}
        >
          <Grid item lg={3}>
            <div className={`${styles["our-cards"]}`}>
              <Image src={"./ourIns-1.svg"} fill alt="" />
            </div>
            <div className={`${styles["our-cards-desc"]}`}>
              <Link href="/">
                <Typography>Kirukans Arts</Typography>
              </Link>
            </div>
          </Grid>
          <Grid item lg={3}>
            <div className={`${styles["our-cards"]}`}>
              <Image src={"./ourIns-2.svg"} fill alt="" />
            </div>
            <div className={`${styles["our-cards-desc"]}`}>
              <Link href="/">
                <Typography>Kirukans Serve</Typography>
              </Link>
            </div>
          </Grid>
          <Grid item lg={3}>
            <div className={`${styles["our-cards"]}`}>
              <Image src={"./ourIns-3.svg"} fill alt="" />
            </div>
            <div className={`${styles["our-cards-desc"]}`}>
              <Link href="/">
                <Typography>Kirukans Work</Typography>
              </Link>
            </div>
          </Grid>
          <Grid item lg={3}>
            <div className={`${styles["our-cards"]}`}>
              <Image src={"./ourIns-4.svg"} fill alt="" />
            </div>
            <div className={`${styles["our-cards-desc"]}`}>
              <Link href="/">
                <Typography>Kirukans Help</Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
