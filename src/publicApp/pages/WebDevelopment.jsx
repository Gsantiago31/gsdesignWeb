import { Grid } from '@mui/material'
import { Navbar } from '../components'

import { GridWebLayout } from '../layout'

export const WebDevelopment = () => {

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Navbar/>

<GridWebLayout />

    </Grid>
  )
}
