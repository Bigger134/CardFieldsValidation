import { useField } from 'formik';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, parse } from 'date-fns';

export const ExpirationDateField = () => {
  const [field, meta, helpers] = useField('expirationDate');

  const handleDateChange = (date: Date | null) => {
    helpers.setValue(date);
    helpers.setTouched(true);   
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Дата истечения"
        value={field.value || null}
        onChange={handleDateChange}
        format="MM/yy"
        views={['month', 'year']}
        slotProps={{
          textField: {
            error: meta.touched && !!meta.error,
            helperText: meta.touched && meta.error,
          }
        }}
      />
    </LocalizationProvider>
  );
};