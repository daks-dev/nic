<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import {
    YandexMetrikaHit,
    ImagePlaceholder,
    Skeleton,
    TestimonialPlaceholder,
    TextPlaceholder,
    VideoPlaceholder,
    Icon
  } from 'daks-svelte';

  import microdata from '$configs/microdata';
  const { email, telephone, address } = microdata.organization;

  const title = 'НИЦ СЭ • Строительная экспертиза';
  const description = 'АО НИЦ «Строительная экспертиза», Москва';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="wrapper">
    <div class="grid lg:grid-cols-12 gap-8 w-full pt-8">
      <div class="mr-auto place-self-center lg:col-span-7 2xl:col-span-8">
        <h1
          class="mb-8
                   font-extrabold leading-tight
                   text-4xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                   text-slate-800 dark:text-slate-200 dark:text-shadow"
          style:--text-shadow-val="3px">
          <span class="block text-[125%]">АО&nbsp;НИЦ</span>
          Строительная экспертиза
        </h1>
        <p
          class="mb-4 font-light
                 text-gray-500 text-sm xs:text-md lg:text-lg dark:text-gray-400 uppercase">
          один из лидеров на строительном рынке в области консалтинга, лабораторного сопровождения
          строительства, обследования зданий и сооружений
        </p>
        <div class="xs:hidden flex justify-around">
          <Button
            href="tel://{telephone.replace(/[\s-()]/g, '')}"
            class="shadow-md shadow-slate-500/20"
            color="light"
            size="xl">
            <Icon
              icon="ic:round-phone-in-talk"
              class="w-16 h-16 text-cyan-600 dark:text-cyan-700" />
          </Button>
          <Button
            href="mailto:{email}"
            class="shadow-md shadow-slate-500/20"
            color="light"
            size="xl">
            <Icon
              icon="ic:round-mail-outline"
              class="w-16 h-16 text-cyan-600 dark:text-cyan-700" />
          </Button>
        </div>
        <div
          class="hidden xs:flex flex-col gap-y-2
                    text-slate-600 dark:text-slate-400">
          <a
            class="font-semibold text-3xl xl:text-4xl hover:text-sky-500
                   transition duration-200 ease-in-out"
            href="tel://{telephone.replace(/[\s-()]/g, '')}">
            {telephone}
          </a>
          <a
            rel="nofollow noreferrer"
            class="text-lg xl:text-xl hover:text-sky-500
                   transition-all duration-200 ease-in-out"
            href={address.url}
            target="_blank"
            itemprop="url">
            {@html address.addressLocality}, {@html address.streetAddress}
          </a>
        </div>
      </div>
      <div
        class="hidden lg:flex
               placeholders lg:col-span-5 2xl:col-span-4 lg:mt-0">
        <VideoPlaceholder
          class="w-full h-auto max-w-full"
          size="48" />
      </div>
    </div>
  </header>

  <div class="placeholders content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
      <ImagePlaceholder />
      <TextPlaceholder />
      <Skeleton />
      <ImagePlaceholder class="-scale-x-100" />
      <TextPlaceholder />
      <Skeleton />
      <TextPlaceholder class="lg:-scale-x-100 lg:order-last" />
      <Skeleton class="lg:-scale-x-100 lg:mr-auto" />
    </div>
    <TestimonialPlaceholder />
  </div>
</main>
