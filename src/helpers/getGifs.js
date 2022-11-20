export const getGifs = async category => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fZ72FWebZdEM74opz6jVc15rxqr9xIYW&q=${category}&limit=10`

    const response = await fetch(url)
    const { data = [] } = await response.json()

    const gifs = data.map(x => ({
        id: x.id,
        title: x.title,
        url: x.images.original.url
    }))

    return gifs
}