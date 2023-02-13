<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  const { images, thumbnails } = data;

  const title = 'НИЦ СЭ • Допуски';
  const description = 'Допуски предпрятия АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Допуски</h1>
  </header>

  <LightboxKit
    class="container lg:content gap-8"
    classes={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {images}
    {thumbnails}
    shadow />
</main>
