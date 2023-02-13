import getter from '$lib/assets/images/content/permissions';

export const load = async () => ({
  ...await getter()
});
