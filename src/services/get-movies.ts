const API_KEY = process.env.API_KEY

export async function getMovies(movie: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`
    )
    const json = await response.json()
    const data = json.results
    return data?.map((movie: any) => ({
      id: movie.id,
      background: movie.backdrop_path,
      image: movie.poster_path,
      title: movie.original_title,
      description: movie.overview,
      release: movie.release_date,
      rate: movie.vote_average,
      language: movie.original_language
    }))
  } catch (error) {
    throw new Error('Error at searching Movies')
  }
}
