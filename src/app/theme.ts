import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export const theme = extendTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
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
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "1.1em",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: "0.5em",
          left: "-1em",
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
          main: purple[400],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: purple[800],
        },
      },
    },
  },
});
