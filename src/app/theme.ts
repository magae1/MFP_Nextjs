import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          boxShadow: "none",
          backgroundColor: "rgba(230 230 230 / 0.8)",
          border: "1px solid rgba(229 234 242 / 1)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(25 25 25 / 0.8)",
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
          main: "#ce2424",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#592626",
        },
      },
    },
  },
});
