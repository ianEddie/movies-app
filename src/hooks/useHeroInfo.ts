import useMovies from './useGetMovies'

export function useHeroInfo() {
  const { movies } = useMovies()
  const title = movies[0]?.title
  const description = movies[0]?.description
  const release = movies[0]?.release
  const language = movies[0]?.language
  const rateNumber = movies[0]?.rate
  const rate = Math.round(rateNumber).toString()

  return { title, description, release, rate, language }
}
