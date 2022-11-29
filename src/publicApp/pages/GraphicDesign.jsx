import { Grid } from '@mui/material'
import { Navbar } from '../components'
import { GridGraphicLayout } from '../layout'

export const GraphicDesign = () => {

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

<GridGraphicLayout />

    </Grid>
  )
}
