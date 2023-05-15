export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=FvHPqiYVzSVDFlxXHo23uXSkhu5komSz&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  let gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized.url,
  }));

  return gifs;
};
