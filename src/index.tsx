import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

// light green #606c38
// dark green #283618
// cream      #fefae0
// light orange #dda15e
// dark orange #bc6c25


const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
        light: "#606c38",
        dark: "#283618",
      },
      secondary: {
        main: "#bc6c25",
        light: "#dda15e"
      },
    },
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 500,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 500,
      },
    }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <App /> 
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
