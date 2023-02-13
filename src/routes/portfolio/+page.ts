import getter from '$lib/assets/images/content/portfolio';

export const load = async () => ({
  ...await getter()
});
