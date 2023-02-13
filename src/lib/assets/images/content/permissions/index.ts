// A4 dpi 75 : 620 × 877 px

// $lib/assets/images/content/permissions

export const sources = async () => [
  (await import(`./00.png?webp`)).default,
  (await import(`./01.png?webp`)).default,
  (await import(`./02.png?webp`)).default,
  (await import(`./03.png?webp`)).default,
  (await import(`./04.png?webp`)).default,
  (await import(`./05.png?webp`)).default,
  (await import(`./06.png?webp`)).default,
  (await import(`./07.png?webp`)).default
];
export const a4 = async () => [
  (await import(`./00.png?w=224&h=320&webp`)).default,
  (await import(`./01.png?w=224&h=320&webp`)).default,
  (await import(`./02.png?w=224&h=320&webp`)).default,
  (await import(`./03.png?w=224&h=320&webp`)).default,
  (await import(`./04.png?w=224&h=320&webp`)).default,
  (await import(`./05.png?w=224&h=320&webp`)).default,
  (await import(`./06.png?w=224&webp`)).default,
  (await import(`./07.png?w=224&webp`)).default
];

export default async () => ({
  images: await sources(),
  thumbnails: await a4()
});
