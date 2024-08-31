import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { classes } from 'src/_mock/classes';

import ClassCard from '../class-card';
import ClassSort from '../class-sort';
import ClassFilters from '../class-filters';
import ClassCartWidget from '../class-cart-widget';

// ----------------------------------------------------------------------

export default function ClassesView() {
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
        Clases
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ClassFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ClassSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {classes.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ClassCard product={product} />
          </Grid>
        ))}
      </Grid>

      <ClassCartWidget />
    </Container>
  );
}
