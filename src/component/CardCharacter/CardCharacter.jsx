import React from 'react'

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Style from "./Card.module.css";

function CardCharacter({
  image,
  name,
  id,
  height,
  homeworld,
  species,
  masters,
}) {
  
  return (
    <>
      <Card variant="outlined" sx={{ width: 320 }}>
        
      <CardOverflow>
        <AspectRatio ratio="1">
          <img className={Style.image}
            src={image}
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        {name}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        id: {id}
      </Typography>
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          height: {height}
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          {homeworld}
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          {species}
        </Typography>
      </CardOverflow>
    </Card>
    </>
  )
}

export default CardCharacter;