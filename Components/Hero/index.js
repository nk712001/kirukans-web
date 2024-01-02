import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';


export default function Hero() {
    return (
        <>
            <Container maxWidth={false}>
                <div className="hero-section">
                    <Typography variant="h1" className="hero-text">Madness In Doing Goodness</Typography>
                </div>
                <Grid container className="hero-bg" rowSpacing={1}>
                    <Grid item lg={6}>
                        <div className="hero-grid">
                            <Image width={560} height={350} alt="" src={"/heroImg.png"} />
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div className="hero-grid hero-desc">
                            <Typography >
                                Up coming event
                            </Typography>
                            <Typography >
                                Kirukans Mural Painting
                            </Typography>
                            <Typography >
                                22 Oct 2023 | Trichy
                            </Typography>
                            <Typography >
                                At Raja government school, we believe in the power of creativity and education. We're thrilled to announce our latest project - a stunning mural that will inspire and uplift our students for years to come.
                            </Typography>
                            <Grid container>
                                <Grid item lg={6}>Donate Us</Grid>
                                <Grid item lg={6}>Join Us</Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}