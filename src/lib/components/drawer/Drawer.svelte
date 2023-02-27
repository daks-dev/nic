<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { sineInOut } from 'svelte/easing';
  import { Drawer, Sidebar, SidebarBrand, SidebarWrapper } from 'flowbite-svelte';
  import { Icon } from 'daks-svelte';
  import SidebarGroup from './SidebarGroup.svelte';
  import type { NavItem } from 'daks-svelte/types';

  export let header: undefined | NavItem[] = undefined;
  export let activity: undefined | NavItem[] = undefined;
  export let footer: undefined | NavItem[] = undefined;

  let hidden = true;
  export const open = () => (hidden = false);
  export const close = () => (hidden = true);

  import microdata from '$configs/microdata';
  const { telephone } = microdata.organization;

  let transitionParams = {
    x: -384,
    duration: 300,
    easing: sineInOut
  };

  let site = {
    name: '', //'Строй Эксп',
    href: '/',
    img: '/images/logo.small.webp'
  };

  afterNavigate(() => setTimeout(close, transitionParams.duration));
</script>

<button
  on:click={open}
  class="
    fixed z-20 top-1/2 h-[35vmin] pr-6 hover:pr-8 -translate-y-1/2 rounded-r-lg
    bg-neutral-400/70 hover:bg-gray-400
    dark:bg-gray-700/70 dark:hover:bg-gray-400/70
    transition duration-100">
  <span
    class="
      absolute right-2.5 top-1/2 w-1 h-1/2 sm:h-1/3 lg:1/4 -translate-y-1/2
      rounded-lg bg-gray-100 dark:bg-gray-800
      animate-pulse" />
</button>

<Drawer
  bind:hidden
  width="w-80 md:w-96 overflow-x-hidden"
  transitionType="fly"
  {transitionParams}
  id="driver">
  <Sidebar asideClass="w-auto">
    <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded">
      <SidebarGroup
        class="flex flex-col items-center"
        on:click={close}>
        <SidebarBrand
          aClass="py-2"
          imgClass="h-24 lg:h-24"
          {site} />
        <a
          class="
            py-2 px-4
            tracking-wider text-2xl
            text-slate-600 dark:text-slate-400 hover:!text-white
            rounded-full hover:bg-gray-500/50
            ransition duration-200 ease-in-out
            select-none"
          href="tel://{telephone.replace(/[\s-()]/g, '')}">
          {telephone}
        </a>
      </SidebarGroup>
      {#if header}
        <SidebarGroup
          links={header}
          border />
      {/if}
      {#if activity}
        <SidebarGroup
          links={activity}
          root="/activity"
          border />
      {/if}
      {#if footer}
        <SidebarGroup
          links={footer}
          border />
      {/if}
    </SidebarWrapper>
  </Sidebar>
  <button
    on:click={close}
    class="
      absolute top-5 right-5 p-2
      hover:bg-gray-200 dark:hover:bg-gray-700
      rounded-full">
    <Icon
      icon="ic:round-close"
      class="w-6 h-6" />
  </button>
</Drawer>
