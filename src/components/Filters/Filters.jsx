import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    ac: false,
    kitchen: false,
    bathroom: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchCampers(filters));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: 400,
      }}
    >
      <TextField
        label="Локація"
        name="location"
        value={filters.location}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />

      <Select
        label="Тип кузова"
        name="type"
        value={filters.type}
        onChange={handleChange}
        displayEmpty
        fullWidth
      >
        <MenuItem value="">Всі</MenuItem>
        <MenuItem value="van">Фургон</MenuItem>
        <MenuItem value="truck">Вантажівка</MenuItem>
      </Select>

      <FormControlLabel
        control={
          <Checkbox name="ac" checked={filters.ac} onChange={handleChange} />
        }
        label="Кондиціонер"
      />

      <FormControlLabel
        control={
          <Checkbox
            name="kitchen"
            checked={filters.kitchen}
            onChange={handleChange}
          />
        }
        label="Кухня"
      />

      <FormControlLabel
        control={
          <Checkbox
            name="bathroom"
            checked={filters.bathroom}
            onChange={handleChange}
          />
        }
        label="Ванна кімната"
      />

      <Button variant="contained" type="submit" fullWidth>
        Застосувати фільтри
      </Button>
    </Box>
  );
};

export default Filters;
