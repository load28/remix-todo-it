export const get = async (): Promise<{ name: string; order: number }> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      console.log('call');
      resolve(await res.json());
    }, 3000);
  });
};