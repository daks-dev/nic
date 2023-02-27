import getter, { sources } from '$lib/assets/images/content/partners';

export const load = async () => ({
  dataset: await getter(sources)
});
