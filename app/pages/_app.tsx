import { FC, ReactElement } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import dayjs from 'dayjs';
import '../styles/globals.scss';

require('dayjs/locale/sv');
dayjs.locale('sv');

interface AppProps {
  Component: FC<any>;
  pageProps: any;
}

const isDevMode = process.env.NODE_ENV === 'development';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      {isDevMode && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
