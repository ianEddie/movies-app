import useMovies from '../hooks/useGetMovies'

import MoviesItem from './MoviesItem'

export default function Movies() {
  const { movies } = useMovies()
  return (
    <section className=' w-full h-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 p-10'>
      {movies.map((movie) => (
        <MoviesItem movie={movie} key={movie.id} />
      ))}
    </section>
  )
}
