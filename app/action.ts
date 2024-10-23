"use server";
export const getAnime = async (page: number) => {
  const url = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await url.json();
  console.log(page);
  return data;
};
