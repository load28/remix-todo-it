import { Link } from '@remix-run/react';

export default function Test() {
  return (
    <>
      <Link to={'/news'}>back</Link>
    </>
  );
}