import { createTheme } from "@mui/material"

export const DEFAULT = "#323232"
export const DARK = "#FA4EAB"
export const LIGHT = "#ED9FC5"
export const LIGHTEST = "#fffafd"

export const theme = createTheme({
  palette: {
    primary: {
      main: DEFAULT,
    },
    secondary: {
      main: LIGHT,
      dark: DARK,
      light: LIGHTEST,
    },
  },
})
