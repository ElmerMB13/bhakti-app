import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { classes } from 'src/_mock/classes';

import WorkshopCard from '../workshop-card';
import WorkshopSort from '../workshop-sort';
import WorkshopFilters from '../workshop-filters';
import WorkshopCartWidget from '../workshop-cart-widget';

// ----------------------------------------------------------------------

export default function WorkshopsView() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Talleres
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <WorkshopFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <WorkshopSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {classes.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <WorkshopCard product={product} />
          </Grid>
        ))}
      </Grid>

      <WorkshopCartWidget />
    </Container>
  );
}
