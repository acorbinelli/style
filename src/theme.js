import { createTheme } from "@mui/material"

export const BLACK_DEFAULT = "#323232"
export const PINK_DARK = "#FA4EAB"
export const PINK_LIGHT = "#ED9FC5"
export const PINK_LIGHTEST = "#fffafd"

export const theme = createTheme({
  palette: {
    primary: {
      main: BLACK_DEFAULT,
    },
    secondary: {
      main: PINK_LIGHT,
      dark: PINK_DARK,
      light: PINK_LIGHTEST,
    },
  },
})
