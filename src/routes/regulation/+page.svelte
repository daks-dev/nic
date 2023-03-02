<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from 'daks-svelte';

  const title = 'НИЦ СЭ • Регламент';
  const description =
    'Регламент АО НИЦ «Строительная экспертиза» по организации и проведения негосударственной экспертизы проектной документации и результатов инженерных изысканий';

  let node: HTMLElement;
  const onload = () => node.classList.remove('opacity-0');

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="min-h-screen mb-0"
  itemprop="mainContentOfPage">
  <header class="content sr-only">
    <h1 class="title">Регламент</h1>
  </header>

  <div
    class="
      wrapper
      bg-center bg-no-repeat bg-waiting bg-1/4 sm:bg-1/5 lg:bg-1/10">
    <object
      bind:this={node}
      on:load={onload}
      class="
        lazy
        w-inherit h-screen max-h-screen--navbar md:pt-3
        shadow-lg shadow-slate-500
        opacity-0 transition-opacity duration-500"
      type="application/pdf"
      data-src="/docs/regulation.pdf"
      title="Регламент АО НИЦ «Строительная экспертиза»"
      aria-label="регламент" />
    <link href="/docs/regulation.pdf" />
  </div>
</main>
