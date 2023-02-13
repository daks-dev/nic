// $lib/assets/images/content/partners

export const sources = async () => [
  (await import(`./00.png?w=480&h=250&webp`)).default,
  (await import(`./01.png?w=480&h=250&webp`)).default,
  (await import(`./02.png?w=480&h=250&webp`)).default,
  (await import(`./03.png?w=480&h=250&webp`)).default,
  (await import(`./04.png?w=480&h=250&webp`)).default
];

export const labels = [
  { subtitle: 'Строительное Управление № 363' },
  { subtitle: 'Научно-Исследовательский Центр «Строительная экспертиза»' },
  { subtitle: 'Группа Компаний «ССК»' },
  { subtitle: 'Транспортная компания «УМ-77»' },
  { subtitle: '«ST»' }
];

export default async () => ({
  images: await sources(),
  labels
});
