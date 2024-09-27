import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';


// 어댑터 함수 작성
// class ReactQueryAdapter implements CacheAdapter {
//   async getItem(key: string) {
//     const cache = queryClient.getQueryData([key]);
//     return cache ? { value: cache } : undefined;
//   }
//
//   async setItem(key: string, value: any) {
//     queryClient.setQueryData([key], value);
//   }
//
//   async removeItem(key: string) {
//     await queryClient.invalidateQueries({ queryKey: [key] });
//   }
// };
//
// // remix-client-cache와 어댑터 연결
// configureGlobalCache(() => new ReactQueryAdapter());

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
