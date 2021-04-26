import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../styles/theme';

import { QueryClientProvider, QueryClient } from 'react-query'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';

// O método NODE_ENV é setado automáticamente pelo Next, então não precisamos colocar no .env que estamos em DES.
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  // O queryclientprovider tem que ser passado para compartilhar as informações do react-query(fetch)
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp
