import React from 'react'
// import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Gallery() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
        <Grid xs={4} sm={ 3} md= {2}>
          <img
            className="rounded-2xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
