import { useEffect } from 'react'
import useMovies from '../hooks/useGetMovies'
import Hero from './Hero'
import Movies from './Movies'
import NoMovies from './NoMovies'

export default function App() {
  const { getMoviesData, movies } = useMovies()
  const hasMovies = movies?.length > 0
  useEffect(() => {
    getMoviesData('avengers')
  }, [])

  return (
    <>
      {hasMovies ? (
        <main className='min-h-screen flex flex-col'>
          <Hero />
          <Movies />
        </main>
      ) : (
        <NoMovies />
      )}
    </>
  )
}
