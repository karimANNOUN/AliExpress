import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const YourThemeProvider = ({ children }:any) => {
  const { i18n } = useTranslation();

  const theme = createTheme({
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
    // Add other theme configurations if needed
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default YourThemeProvider;