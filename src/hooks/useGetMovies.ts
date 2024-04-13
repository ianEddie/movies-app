
import { getMovies } from '../services/get-movies'
import useMoviesStore from '../store/movies-store'

export default function useMovies() {
  const { updateMovies, movies } = useMoviesStore()

  const getMoviesData = async (movie: string) => {
    try {
      const newMovies = await getMovies(movie)
      updateMovies(newMovies)
    } catch (e) {
      throw new Error('Movies not found')
    }
  }

  return { getMoviesData, movies }
}
