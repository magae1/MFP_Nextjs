import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { deepPurple, purple } from "@mui/material/colors";

export const theme = extendTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        variant: "outlined",
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "elevation",
        elevation: 1,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          minHeight: "20px",
          marginTop: "1px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          boxShadow: "none",
          backgroundColor: "rgba(205 205 205 / 0.8)",
          border: "1px solid rgba(229 234 242 / 1)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(75 75 75 / 0.8)",
            border: "1px solid rgba(194 224 255 / 0.08)",
          },
        }),
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: purple[100],
          main: purple[200],
          dark: purple[300],
          contrastText: "#050505",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          light: purple[700],
          main: purple[800],
          dark: purple[900],
          contrastText: "#fafafa",
        },
      },
    },
  },
});
