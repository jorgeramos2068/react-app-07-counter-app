export const getImagen = async() => {
  try{
    const apiKey = '4dseSCDiIYLurmNtYrlNAf3lMEw5OT7Z';
    const resp = await fetch(`api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'No existe';
  }
};
