import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ResponsiveAppBar from '@/component/header';
import StickyFooter from '@/component/footer';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ResponsiveAppBar />            
            {props.children}
            <StickyFooter/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}