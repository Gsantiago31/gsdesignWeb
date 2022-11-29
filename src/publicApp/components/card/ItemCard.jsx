import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FirebaseDB } from '../../../firebase/config';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import ModalCard from '../modal/Modal';
import { useMemo } from 'react';

export default function ItemCard( {mainImage, title, body, imageUrls, url, tags} ) {


  const newBody = useMemo(() => {

    return body.length > 30
    ? body.substring(0, 30) + '...'
    : body;

  },[ body ])

  return (
    <Card sx={{maxWidth: '100%', marginBottom: '20px'}} >
      <CardMedia
        component="img"
        height="200"
        image={ mainImage }
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {newBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link rel="noopener" href={url} target="_blank" underline="none">
          Live
          </Link>
          </Button>
        <ModalCard title={title} body={body} images={imageUrls} url={url} mainImage={mainImage} tags={tags}/>
      </CardActions>
    </Card>
  );
}