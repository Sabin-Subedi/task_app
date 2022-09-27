import "../style.css";
import "../App.css";

import mainTheme from "../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { defaultLayout } from "./layout/default";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout;

  return (
    <ThemeProvider theme={mainTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
