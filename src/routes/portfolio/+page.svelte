<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  const { images, thumbnails } = data;

  const title = 'НИЦ СЭ • Проекты';
  const description = 'Проекты предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <LightboxKit
    class="wrapper gap-8"
    classes={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {images}
    {thumbnails}
    centered
    rounded
    shadow
    scale
    grayscale />
</main>
