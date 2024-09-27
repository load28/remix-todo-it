import { get } from '../data';
import { ClientLoaderFunctionArgs, Link, useNavigate } from '@remix-run/react';
import { json } from '@remix-run/node';
import { dehydrate, useQuery } from '@tanstack/react-query';
import React from 'react';
import { cacheClientLoader } from 'remix-client-cache';
import { queryClient } from '../root';

export const loader = async () => {
  await queryClient.prefetchQuery({
    queryKey: ['news'],
    queryFn: get
  });

  return json({ dehydratedState: dehydrate(queryClient) });
};

export const clientLoader = (args: ClientLoaderFunctionArgs) => cacheClientLoader(args);
clientLoader.hydrate = true;

export default function News() {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useQuery({ queryFn: get, queryKey: ['news'] });
  return (
    <>
      <div>News</div>
      {
        isLoading && <>loading...</>
      }
      {
        isSuccess && <>
          <div>{data.name}</div>
          <div>{data.order}</div>
        </>
      }
      <Link to={'/news'}>Client load</Link>
      <div>
        <button onClick={() => navigate('/test')}>go test</button>
      </div>
    </>
  );
}