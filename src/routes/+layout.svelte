<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { lazyload, YandexMetrikaInit, RouteTransition, ScreenBlock } from 'daks-svelte';
  import { Drawer, Footer, Navbar } from '$lib/components';

  import '../app.css';
  import '$iconify';

  import type { PageData } from './$types';
  export let data: PageData;

  import { app, nav } from '$configs';

  // window.matchMedia('(prefers-color-scheme: dark)').matches
  if (BROWSER) {
    if (!('color-theme' in localStorage)) {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    document.lazyload ??= lazyload();
  }
</script>

<svelte:head>
  <meta
    name="theme-color"
    content={app.themeColor} />
  <meta
    name="msapplication-TileColor"
    content={app.tileColor} />
  <meta
    name="application-name"
    content={app.shortName} />
  <meta
    name="apple-mobile-web-app-title"
    content={app.shortName} />
</svelte:head>

<RouteTransition
  class="grow"
  referesh={data.referesh}
  mode={1}>
  <slot />
</RouteTransition>

<Footer menu={nav.footer} />

<Navbar menu={nav.navbar} />

<Drawer menu={nav.draver} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
