import getter from '$lib/assets/images/content/partners';

export const load = async () => ({
  ...await getter()
});
