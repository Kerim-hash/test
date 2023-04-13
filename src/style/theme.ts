import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "19px",
    },

    body1: {
      fontWeight: 400,
      fontSize: 14,
      color: "rgba(17, 17, 17, 0.7)",
    },
    body2: {
      fontWeight: 400,
      fontSize: 12,
      color: "#171717",
    },
  },
  palette: {
    primary: {
      main: "#7AA7FF",
      dark: "#3660F4",
      light: "#F4F4F4",
    },
    secondary: {
      main: "#F5F5F7",
      dark: "#E9E9EB",
      light: "rgba(17, 17, 17, 0.25);",
    },
    text: {
      primary: "#171717",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          // padding: 0,
          background: "none",
          "&.MuiAccordion-root:before": {
            display: "none",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiAccordionSummary-root": {
            padding: "0 4px !important",
          },
          background: "none",
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "0 !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "input": {
            padding: "0",
            fontSize: "12px"
          },
          "&.MuiInput-root&::before": {
          borderBottom: "1px solid #EAEAEC"
          }
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 4px !important",
          "& .MuiButtonBase-root": {
            minHeight: "25px !important",
            height: "0 !important",
          },
        },
      },
    },
  },
});
