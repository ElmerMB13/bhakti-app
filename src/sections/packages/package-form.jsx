import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  InputAdornment,
  FormHelperText,
} from '@mui/material';

// ----------------------------------------------------------------------

const initialValues = {
  name: '',
  cost: '',
  classification: '',
  amount: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  cost: Yup.string().required('Required'),
  classification: Yup.string().required('Required'),
  amount: Yup.string().required('Required'),
});

const options = [
  { label: 'Yoga', value: 'yoga' },
  { label: 'Barre', value: 'barre' },
];

export default function PackageForm() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ dirty, isValid, values, handleChange, handleBlur, touched, errors }) => (
        <Form>
          <Grid item container spacing={1} justify="center" sx={{ marginTop: 2 }}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="cost"
                name="cost"
                label="Costo"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.cost && Boolean(errors.cost)}
                helperText={touched.cost && errors.cost}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₡</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="classification">Clasificación</InputLabel>
                <Select
                  labelId="classification"
                  id="classification"
                  label="Clasificación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.classification}
                  name="classification"
                  error={touched.classification && Boolean(errors.classification)}
                >
                  {options.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
                {touched.classification && errors.classification && (
                  <FormHelperText sx={{ color: 'red' }}>Error</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                id="amount"
                name="amount"
                label="Cantidad de clases"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount}
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
            REGISTER
          </Button>
        </Form>
      )}
    </Formik>
  );
}
