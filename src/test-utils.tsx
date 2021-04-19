import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { setupServer, SetupServerApi } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';

import { handlers } from './serverHandlers';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const server: SetupServerApi = setupServer(...handlers);

beforeAll((): void =>
  server.listen({
    onUnhandledRequest: 'warn',
  })
);
afterEach((): void => server.resetHandlers());
afterAll((): void => server.close());

const AllTheProviders: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }