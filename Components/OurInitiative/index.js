import * as React from "react";
import { Typography } from "@mui/material";
import styles from "./ourInitiative.module.css";
export default function OurInitiative() {
  return (
    <>
      <div className={`${styles["our-section"]}`}>
        <Typography variant="h1">Our Initiatives</Typography>
      </div>
    </>
  );
}
