"use client";
import React from "react";
import styles from "./event.module.css";
import { Button, Container, Grid, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <Container>
        <div className="our-section">
          <Typography variant="h1">Event Chronicles</Typography>
        </div>

        <div className={`${styles["events-below"]}`}>
          <Grid container>
            <Grid item lg={8}>
              <iframe
                width="914"
                height="514"
                src="https://www.youtube.com/embed/ahAYApT2b4U"
                title="Love of THAIYAMA  || Feed The Homeless || Kirukans"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Grid>
            <Grid item lg={6}>
              <div className={`${styles["events-above"]}`}>
                <Typography variant="h3">Kirukans creative workshop</Typography>
                <Typography>
                  feed the home less Freezing temperatures threaten refugee
                  families feed the
                </Typography>
                <Typography className={`${styles["events-above-link"]}`}>
                  <Link href="/" className="btn btn-primary">
                    <Image
                      src={"./youtube-black.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />
                    Watch this fully
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
