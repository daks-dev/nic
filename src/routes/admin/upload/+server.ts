import { iconset } from 'daks-svelte/dist/server';
import { building } from '$app/environment';

export const prerender = false;

export const GET = async function get({ setHeaders }: unknown) {
  setHeaders({
    'content-type': 'application/json'
  });
  return new Response(JSON.stringify(building ? null : await iconset()));
};
