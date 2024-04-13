import useMovies from '../hooks/useGetMovies'

export default function HeroBackground() {
  const { movies } = useMovies()
  const background = movies[0]?.background

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        maskImage: 'linear-gradient(to bottom, black 30%, transparent 95%)'
      }}
      className='absolute top-0 left-0 w-full h-full'
    />
  )
}
