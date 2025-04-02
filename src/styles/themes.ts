// theme/theme.ts
import { lightTheme } from "../styles/lightTheme";
import { darkTheme } from "../styles/darkTheme";
import { Typography } from "../styles/Typography";

export const fullLightTheme = {
  colors: lightTheme.colors,
  shadows: lightTheme.shadows,
  typography: Typography,
};

export const fullDarkTheme = {
  colors: darkTheme.colors,
  shadows: darkTheme.shadows,
  typography: Typography,
};

export type FullTheme = typeof fullLightTheme;
