/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import dayjs from 'dayjs';

require('isomorphic-fetch');
require('dayjs/locale/sv');
dayjs.locale('sv');

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

const renderWithProviders = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders };
