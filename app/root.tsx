import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useDehydratedState } from 'use-dehydrated-state';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
      gcTime: 5 * 1000,
      refetchOnMount: false, // 컴포넌트 마운트 시 API 요청 방지
      refetchOnWindowFocus: false // 창이 포커스될 때 API 요청 방지
    }
  }
});

export default function App() {
  const dehydratedState = useDehydratedState();

  return (
    <html>
    <head>
      <link rel="icon" href="data:image/x-icon;base64,AA" />
      <Meta />
      <Links />
      <title>Todo it</title>
    </head>
    <body>
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <Outlet />
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
    <Scripts />
    </body>
    </html>
  );
}
