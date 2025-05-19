import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/shared/utils/theme/theme";
import ReactQueryProvider from "@/shared/react-query/react-query.provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
