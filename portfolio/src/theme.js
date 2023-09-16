import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 760,
      laptop: 1280,
      desktop: 1440,
    },
  },
});

export default theme