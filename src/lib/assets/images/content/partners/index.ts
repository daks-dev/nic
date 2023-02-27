import type { ImageMeta, Caption, DataImage } from 'daks-svelte/types'

export const sources = async (): Promise<ImageMeta[]> => [
  (await import(`./00.png?w=480&h=250&webp`)).default,
  (await import(`./01.png?w=480&h=250&webp`)).default,
  (await import(`./02.png?w=480&h=250&webp`)).default,
  (await import(`./03.png?w=480&h=250&webp`)).default,
  (await import(`./04.png?w=480&h=250&webp`)).default
];

export const captions: Caption[] = [
  { subtitle: 'Строительное Управление № 363' },
  { subtitle: 'Научно-Исследовательский Центр «Строительная экспертиза»' },
  { subtitle: 'Группа Компаний «ССК»' },
  { subtitle: 'Транспортная компания «УМ-77»' },
  { subtitle: '«ST»' }
];

export default async (fn: () => Promise<ImageMeta[]>): Promise<DataImage[]> =>
  (await fn()).reduce(
    (res, val, key) => ((res[key] = Object.assign(val, captions[key])), res),
    Array(0)
  );
  