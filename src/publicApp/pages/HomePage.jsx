import { Grid } from '@mui/material'
import React from 'react';
import { Navbar } from '../components';
import { ProfileCard } from '../components/profileCard'

export const HomePage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
    <Navbar />

      <Grid container> 
        <ProfileCard></ProfileCard>
      </Grid>

    </Grid>
  )
}
