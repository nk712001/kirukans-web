import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function JoinUs() {
  return (
    <>
      <Container>
        <div>
          <Grid container>
            <Grid item></Grid>
            <Grid item>
              <div>
                <Image src={"./join-banner.svg"} layout="fill" alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
