'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';

const lightTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#62bb46', // Your primary color
      contrastText: '#fff',
    },
    secondary: {
      main: '#002e6d', // Your secondary color
    },
  },
};

export const theme = createTheme(lightTheme);
