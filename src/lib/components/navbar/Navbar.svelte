<script lang="ts">
  import classNames from 'classnames';
  import { page } from '$app/stores';
  import { Navbar, NavLi, NavUl, NavHamburger, Chevron, DarkMode } from 'flowbite-svelte';
  import { Nav, Swiping, Icon } from 'daks-svelte';
  import NavBrand from './NavBrand.svelte';
  import Dropdown from './NavDropdown.svelte';
  import type { NavItem } from 'daks-svelte/types';

  export let links: NavItem[];
  export let scope = Nav.map(links, true);
  export let paging = false;

  /*
  const darkmodebtn = `
    p-2.5 rounded-lg text-lg text-gray-500 dark:text-gray-400
    hover:bg-gray-100 dark:hover:bg-gray-700
    focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700`;
  */

  //const color: any = 'primary';

  $: activeUrl = $page.url.pathname;
</script>

{#if scope.length}
  <Swiping
    {scope}
    {paging} />
{/if}

<Navbar
  let:hidden
  let:toggle
  class="
    fixed z-40 top-0 left-0 shadow-md dark:bg-primary-700
    overflow-offset"
  color="navbar">
  {@const close = () => hidden || toggle()}

  <NavBrand
    on:click={close}
    href="/">
    <img
      src="/images/logo.small.webp"
      class="border-transparent ml-1.5 mr-3 h-6 sm:h-9"
      alt="логотип АО Научно-Исследовательский Центр «Строительная экспертиза»" />
    <!--span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Строй Эксп
    </span-->
  </NavBrand>

  <DarkMode class="ml-auto md:ml-0 md:order-last" />

  <NavHamburger
    on:click={toggle}
    class="ml-4" />

  <NavUl
    class="!bg-transparent border-none"
    divClass="
      w-full md:block md:w-auto
      max-h-screen--navbar overflow-y-auto"
    {hidden}>
    {#each links as link}
      {@const active = activeUrl === link.href}
      {#if link.links}
        {@const step = activeUrl.indexOf(`${link.href}/`) === 0}
        <Dropdown
          on:close={close}
          {link}
          {active}
          {step}
          offset={32} />
      {:else}
        {@const home = link.href === '/'}
        <NavLi
          on:click={close}
          class={classNames(
            'cursor-pointer select-none',
            home && 'hidden md:block'
          )}
          href={link.href}
          target={link.target}
          {active}>
          {#if home}
            <Icon
              icon={`line-md:home-simple${active ? '-twotone' : ''}`}
              class="w-6 h-6 -mt-0.5" />
          {:else}
            {@html link.label}
          {/if}
        </NavLi>
      {/if}
    {/each}
  </NavUl>
</Navbar>
