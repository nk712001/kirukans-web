"use client";
import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "./insights.module.css";

export default function OurInsights() {
  return (
    <>
      <div className={`${styles["insight-bg"]}`}>
        <Container>
          <div className="our-section">
            <Typography variant="h1">Our Insights</Typography>
          </div>
        </Container>
      </div>
    </>
  );
}
