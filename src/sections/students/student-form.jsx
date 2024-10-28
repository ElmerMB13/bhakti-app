/* eslint-disable new-cap */
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import { Textarea } from '@mui/joy';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {
  Box,
  Button,
  Select,
  Tooltip,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  FormHelperText,
} from '@mui/material';

import Iconify from 'src/components/iconify';

const today = new Date();

const initialValues = {
  id: '',
  fullname: '',
  email: '',
  phone: '',
  birthday: today,
  entryDate: today,
  province: '',
  canton: '',
  district: '',
  medicalRecord: '',
  package: '',
};

const validationSchema = Yup.object({
  id: Yup.string().required('Required'),
  fullname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  package: Yup.string().required('Required'),
});

const packages = [
  { label: 'Paquete 1', price: 'CRC 30 000', classes: 1, value: 'package1' },
  { label: 'Paquete 2', price: 'CRC 35 000', classes: 2, value: 'package2' },
  { label: 'Paquete 3', price: 'CRC 40 000', classes: 3, value: 'package3' },
];

export default function StudentForm() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ dirty, isValid, values, handleChange, handleBlur, setFieldValue, touched, errors }) => (
        <Form>
          <Grid container spacing={1} justify="center" sx={{ marginTop: 2 }}>
            <Grid xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="fullname"
                name="fullname"
                label="Nombre Completo"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fullname && Boolean(errors.fullname)}
                helperText={touched.fullname && errors.fullname}
              />
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="id"
                name="id"
                label="Cédula"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.id && Boolean(errors.id)}
                helperText={touched.id && errors.id}
              />
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Teléfono"
                type="tel"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  defaultValue={dayjs(values.birthday)}
                  sx={{ width: '100%' }}
                  label="Fecha de nacimiento"
                  onChange={(date) => setFieldValue('birthday', date)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  defaultValue={dayjs(values.entryDate)}
                  sx={{ width: '100%' }}
                  label="Fecha de ingreso"
                  onChange={(date) => setFieldValue('entryDate', date)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <TextField
                fullWidth
                id="province"
                name="province"
                label="Provincia"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <TextField
                fullWidth
                id="canton"
                name="canton"
                label="Cantón"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <TextField
                fullWidth
                id="district"
                name="district"
                label="Distrito"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="package">Paquete</InputLabel>
                <Select
                  id="package"
                  name="package"
                  labelId="package"
                  label="Paquete"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.package}
                  error={touched.package && Boolean(errors.package)}
                >
                  {packages.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <Typography>{item.label}</Typography>
                        <Tooltip
                          title={
                            <Box sx={{ flexDirection: 'column' }}>
                              <Typography>Precio: {item.price}</Typography>
                              <Typography>Clases por semana: {item.classes}</Typography>
                            </Box>
                          }
                        >
                          <Iconify icon="material-symbols:info" />
                        </Tooltip>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
                {touched.package && errors.package && (
                  <FormHelperText sx={{ color: 'red' }}>
                    {touched.package && errors.package}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <Textarea
                minRows={6}
                id="medicalRecord"
                name="medicalRecord"
                placeholder="Historial médico"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
          </Grid>
          <Button
            disabled={!dirty || !isValid}
            variant="contained"
            color="primary"
            type="Submit"
            sx={{
              marginTop: 2,
            }}
          >
            Registrar
          </Button>
        </Form>
      )}
    </Formik>
  );
}
