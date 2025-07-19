'use client';

import { Container } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { QueryProviders } from './queryProviders';

export default function Layout(props: any) {
  const { children } = props;

  return (
    <html lang='en'>
      <head>
        <title>Todo app</title>
      </head>
      <body>
        <AppRouterCacheProvider>
          <Container maxWidth='lg' sx={{ padding: 0 }}>
            <QueryProviders>{children}</QueryProviders>
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
