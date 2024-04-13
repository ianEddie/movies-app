import useMovies from '../hooks/useGetMovies'
import SearchIcon from '../icons/SearchIcon'

export default function Search() {
  const { getMoviesData } = useMovies()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('movie')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return
    const movie = input.value
    getMoviesData(movie)
  }
  return (
    <form onSubmit={handleSubmit} className='py-2 flex justify-center gap-x-2'>
      <input
        type='text'
        placeholder='search a movie'
        name='movie'
        className='text-center py-[2px] rounded-3xl backdrop-blur-[10px] bg-neutral-100 text-neutral-900 font-semibold placeholder:text-neutral-700 placeholder:font-normal'
      />
      <SearchIcon />
    </form>
  )
}
