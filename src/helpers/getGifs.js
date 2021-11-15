export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=LiD5xHVX5zlS4l7jil9Gfw4Nsv2MzUnW`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id:img.id,
            tittle:img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return(gifs);
}