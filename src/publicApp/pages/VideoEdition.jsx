import { Grid } from '@mui/material'
import { Navbar } from '../components'
import { GridVideoLayout } from '../layout'

export const VideoEdition = () => {

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

<GridVideoLayout />

    </Grid>
  )
}
