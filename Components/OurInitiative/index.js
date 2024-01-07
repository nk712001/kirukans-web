import * as React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./ourInitiative.module.css";
import Image from "next/image";
import Link from "next/link";
export default function OurInitiative() {
  return (
    <>
      <div className="our-section">
        <Typography variant="h1">Our Initiatives</Typography>
      </div>
      <Grid
        container
        className={`${styles["our-container"]}`}
        columnGap={4}
        justifyContent={"center"}
      >
        <Grid item className={`${styles["our-cards"]}`} spacing={0}>
          <div>
            <Image src={"./ourIns-1.svg"} width={290} height={250} alt="" />
          </div>
          <div className={`${styles["our-cards-desc"]}`}>
            <Link href="/">
              <Typography>Kirukans Arts</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item className={`${styles["our-cards"]}`} spacing={0}>
          <div>
            <Image src={"./ourIns-2.svg"} width={290} height={250} alt="" />
          </div>
          <div className={`${styles["our-cards-desc"]}`}>
            <Link href="/">
              <Typography>Kirukans Serve</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item className={`${styles["our-cards"]}`} spacing={0}>
          <div>
            <Image src={"./ourIns-3.svg"} width={290} height={250} alt="" />
          </div>
          <div className={`${styles["our-cards-desc"]}`}>
            <Link href="/">
              <Typography>Kirukans Work</Typography>
            </Link>
          </div>
        </Grid>
        <Grid item className={`${styles["our-cards"]}`} spacing={0}>
          <div>
            <Image src={"./ourIns-4.svg"} width={290} height={250} alt="" />
          </div>
          <div className={`${styles["our-cards-desc"]}`}>
            <Link href="/">
              <Typography>Kirukans Help</Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
