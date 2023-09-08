import { ClerkProvider } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@/styles/globals.css';

import { store } from '@/store/store';
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider {...pageProps}>
          <Component {...pageProps} />
        </ClerkProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
