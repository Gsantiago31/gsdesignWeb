import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import ItemCard from '../components/card/ItemCard'

export const GridGraphicLayout = () => {

    const { cards } = useSelector( state => state.publicApp )

    const graphicCards = cards.filter( materias => materias.group === "graphic design");
  return (
    <Grid container 
    spacing={2}
    sx={{marginTop: '10%'}}
    > 
        <Grid className='animate__animated animate__fadeIn animate__slow' item xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            {
                graphicCards.map( card => (
                    <Grid item xs={12} sm={5.8} md={3.8} key={card.id}>
                    <ItemCard key={card.id} mainImage={card.imageUrls[0]} title={card.title} body={card.body} imageUrls={card.imageUrls} url={card.url} tags={card.tags}></ItemCard>
                    </Grid>
                ))
            }
        </Grid>

    </Grid>
  )
}
