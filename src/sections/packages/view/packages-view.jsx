import { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
  Stack,
  Button,
  Dialog,
  Container,
  Typography,
  DialogTitle,
  DialogContent,
} from '@mui/material';

import { products } from 'src/_mock/products';

import Iconify from 'src/components/iconify';

import PackageCard from '../package-card';
import PackageSort from '../package-sort';
import PackageForm from '../package-form';
import PackageFilters from '../package-filters';
import PackageCartWidget from '../package-cart-widget';

// ----------------------------------------------------------------------

export default function PackagesView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Paquetes</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleOpen}
        >
          Nuevo paquete
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <PackageFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <PackageSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <PackageCard product={product} />
          </Grid>
        ))}
      </Grid>

      <PackageCartWidget />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="package-form-dialog"
      >
        <DialogTitle id="package-form-dialog">Nuevo paquete</DialogTitle>
        <DialogContent>
          <PackageForm />
        </DialogContent>
      </Dialog>
    </Container>
  );
}
